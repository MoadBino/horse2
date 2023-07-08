import { Field, InputType } from 'type-graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';

@InputType()
export class CustomCreateMediaHorses {
    @Field(_type => GraphQLUpload, {
        nullable: true,
    })
    file?: FileUpload;
}
