import { ArgsType, Field } from 'type-graphql';
import { StoriesCreateInput } from '@generated/type-graphql';
import { CustomCreateMediaStories } from './ArgsTypes';

@ArgsType()
export class CreateCustomStoryArgs {
    @Field(_type => StoriesCreateInput, {
        nullable: false,
    })
    data?: StoriesCreateInput | undefined;

    @Field(_type => [CustomCreateMediaStories], {
        nullable: true,
    })
    files?: CustomCreateMediaStories[] | undefined;
}
