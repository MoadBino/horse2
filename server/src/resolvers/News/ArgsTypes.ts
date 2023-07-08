import { Field, InputType } from 'type-graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';

@InputType()
export class CustomCreateMediaNews {
    @Field(_type => GraphQLUpload, {
        nullable: true,
    })
    file?: FileUpload;
}
