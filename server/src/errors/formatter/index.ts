import { ApolloError } from 'apollo-errors';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

interface newError {
    locations: any;
    message: string;
    path: any;
    validationErrors?: Array<string>;
}

export default (error: GraphQLError): GraphQLFormattedError => {
    if (error.originalError instanceof ApolloError) {
        return error;
    }
    const { locations, message: originalMessage, path } = error;
    let message = originalMessage;
    if (error?.extensions?.exception?.code === 'P2002') {
        message = `${
            error?.extensions?.exception?.meta?.target.split('_')[0]
        } value should be unique`;
    }
    if (error?.extensions?.exception?.code === 'P2025') {
        message = error?.extensions?.exception?.meta?.cause;
    }

    let newError: newError = {
        locations,
        message,
        path,
    };

    if (error?.extensions?.exception) {
        const { exception } = error.extensions;
        if (exception?.validationErrors) {
            newError.validationErrors = exception.validationErrors.flatMap(vErr =>
                Object.keys(vErr.constraints).map(constraint => vErr.constraints[constraint]),
            );
            delete error.extensions.exception.validationErrors;
            newError = {
                ...newError,
                ...error.extensions.exception,
            };
        }
    }
    return newError;
};
