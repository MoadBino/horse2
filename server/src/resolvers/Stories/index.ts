import { Resolver, Query, Mutation, Ctx, Info, Args } from 'type-graphql';
import {
    FindManyStoriesArgs,
    FindUniqueStoriesArgs,
    DeleteOneStoriesArgs,
    AggregateStories,
    AggregateStoriesArgs,
    Stories,
} from '@generated/type-graphql';
import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../../context';
import { CreateCustomStoryArgs } from './ArgsTypesCreateStory';
import CreateStoryFunction from './CreateStory';
import { UpdateCustomStoryArgs } from './ArgsTypesUpdateStory';
import UpdateStoryFunction from './UpdateStory';

Resolver(_of => Stories);
export class StoriesResolver {
    //getAllStories
    @Query(_returns => [Stories], {
        nullable: false,
    })
    async getAllStories(@Ctx() ctx: Context, @Args() args: FindManyStoriesArgs): Promise<Stories[]> {
        return ctx.prisma.stories.findMany({
            ...args,
        });
    }

    //getStoryById
    @Query(_returns => Stories, {
        nullable: false,
    })
    async getStoryById(
        @Ctx() ctx: Context,
        @Args() args: FindUniqueStoriesArgs,
    ): Promise<Stories | null> {
        return ctx.prisma.stories.findUnique(args);
    }

    //getStoriesCount
    @Query(_returns => AggregateStories, {
        nullable: false,
    })
    async getStoriesCount(
        @Ctx() ctx: any,
        @Info() info: GraphQLResolveInfo,
        @Args() args: AggregateStoriesArgs,
    ): Promise<AggregateStories> {
        return ctx.prisma.stories.aggregate({
            ...args,
            select: {
                _count: true,
            },
        });
    }

    //createStory
    @Mutation(_returns => Stories, {
        nullable: false,
    })
    async createStory(@Ctx() ctx: any, @Args() args: CreateCustomStoryArgs): Promise<Stories> {
        return CreateStoryFunction(ctx, args);
    }

    //updateStory
    @Mutation(_returns => Stories, {
        nullable: false,
    })
    async updateStory(@Ctx() ctx: any, @Args() args: UpdateCustomStoryArgs): Promise<Stories> {
        return UpdateStoryFunction(ctx, args);
    }

    //deleteStory
    @Mutation(_returns => Stories, {
        nullable: false,
    })
    async deleteStory(@Ctx() ctx: any, @Args() args: DeleteOneStoriesArgs): Promise<Stories> {
        return ctx.prisma.stories.delete({
            ...args,
        });
    }
}
