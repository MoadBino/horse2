import { ArgsType, Field } from 'type-graphql';
import { FilesCreateManyInput } from '@generated/type-graphql';
import { CustomCreateMediaFiles } from './ArgsTypes';

@ArgsType()
export class CreateCustomFileArgs {
    @Field(_type => FilesCreateManyInput, {
        nullable: false,
    })
    data?: FilesCreateManyInput[] | undefined;

    @Field(_type => [CustomCreateMediaFiles], {
        nullable: true,
    })
    files?: CustomCreateMediaFiles[] | undefined;
}
