import { Field, InputType } from 'type-graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';

@InputType()
export class CustomCreateMediaFiles {
    @Field(_type => GraphQLUpload, {
        nullable: true,
    })
    file?: FileUpload;
}
