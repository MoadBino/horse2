import { ArgsType, Field } from 'type-graphql';
import { StoriesWhereUniqueInput, StoriesUpdateInput } from '@generated/type-graphql';
import { CustomCreateMediaStories } from './ArgsTypes';

@ArgsType()
export class UpdateCustomStoryArgs {
    @Field(_type => StoriesUpdateInput, {
        nullable: false,
    })
    data!: StoriesUpdateInput;

    @Field(_type => StoriesWhereUniqueInput, {
        nullable: false,
    })
    where!: StoriesWhereUniqueInput;

    @Field(_type => [CustomCreateMediaStories], {
        nullable: true,
    })
    files?: CustomCreateMediaStories[] | undefined;
}
