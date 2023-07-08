import { ArgsType, Field } from 'type-graphql';
import { NewsWhereUniqueInput, NewsUpdateInput } from '@generated/type-graphql';
import { CustomCreateMediaNews } from './ArgsTypes';

@ArgsType()
export class UpdateCustomNewsArgs {
    @Field(_type => NewsUpdateInput, {
        nullable: false,
    })
    data!: NewsUpdateInput;

    @Field(_type => NewsWhereUniqueInput, {
        nullable: false,
    })
    where!: NewsWhereUniqueInput;

    @Field(_type => [CustomCreateMediaNews], {
        nullable: true,
    })
    files?: CustomCreateMediaNews[] | undefined;
}
