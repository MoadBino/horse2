import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { context } from './context';
import { port } from './variables';
import buildSchema from './buildSchema';
import { graphqlUploadExpress } from 'graphql-upload';
import { getGraphqlCorsConfig } from './middlewares/cors';
import formatError from './errors/formatter';

const app = async () => {
    const schema = buildSchema();
    const server = new ApolloServer({ schema, context, formatError });

    await server.start();

    const app = express();

    // This middleware should be added before calling `applyMiddleware`.
    app.use(graphqlUploadExpress({ maxFileSize: 160000000, maxFiles: 20 }));

    server.applyMiddleware({
        app,
        path: '/graphql',
        cors: getGraphqlCorsConfig(),
    });

    server.applyMiddleware({ app });

    await new Promise<void>(r => app.listen({ port }, r));

    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
};

app();
