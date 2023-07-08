import { ArgsType, Field } from 'type-graphql';
import { NewsCreateInput } from '@generated/type-graphql';
import { CustomCreateMediaNews } from './ArgsTypes';

@ArgsType()
export class CreateCustomNewsArgs {
    @Field(_type => NewsCreateInput, {
        nullable: false,
    })
    data?: NewsCreateInput | undefined;

    @Field(_type => [CustomCreateMediaNews], {
        nullable: true,
    })
    files?: CustomCreateMediaNews[] | undefined;
}
