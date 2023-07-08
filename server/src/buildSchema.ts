import { GraphQLSchema } from 'graphql';
import * as tq from 'type-graphql';
import {
    HorsesRelationsResolver,
    NewsRelationsResolver,
    HorseFamilyTreeRelationsResolver,
} from '@generated/type-graphql';
import { HorsesResolver } from './resolvers/Horses';
import { NewsResolver } from './resolvers/News';
import { ContactInformationResolver } from './resolvers/ContactInformation';
import { FilesResolver } from './resolvers/Files';

export default function buildSchema(): GraphQLSchema {
    return tq.buildSchemaSync({
        resolvers: [
            //Horses
            HorsesResolver,
            HorsesRelationsResolver,
            HorseFamilyTreeRelationsResolver,
            //News
            NewsResolver,
            NewsRelationsResolver,
            //ContactInformation
            ContactInformationResolver,
            //Files
            FilesResolver,
        ],
        validate: { forbidUnknownValues: false },
    });
}
