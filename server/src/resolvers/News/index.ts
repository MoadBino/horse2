import { Resolver, Query, Mutation, Ctx, Info, Args } from 'type-graphql';
import {
    CreateOneNewsArgs,
    FindManyNewsArgs,
    FindUniqueNewsArgs,
    UpdateOneNewsArgs,
    DeleteOneNewsArgs,
    AggregateNews,
    AggregateNewsArgs,
    News,
} from '@generated/type-graphql';
import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../../context';
import { CreateCustomNewsArgs } from './ArgsTypesCreateNews';
import CreateNewsFunction from './CreateNews';
import { UpdateCustomNewsArgs } from './ArgsTypesUpdateNews';
import UpdateNewsFunction from './UpdateNews';

Resolver(_of => News);
export class NewsResolver {
    //getAllNews
    @Query(_returns => [News], {
        nullable: false,
    })
    async getAllNews(@Ctx() ctx: Context, @Args() args: FindManyNewsArgs): Promise<News[]> {
        return ctx.prisma.news.findMany({
            ...args,
        });
    }

    //getNewsById
    @Query(_returns => News, {
        nullable: false,
    })
    async getNewsById(@Ctx() ctx: Context, @Args() args: FindUniqueNewsArgs): Promise<News | null> {
        return ctx.prisma.news.findUnique(args);
    }

    //getNewsCount
    @Query(_returns => AggregateNews, {
        nullable: false,
    })
    async getNewsCount(
        @Ctx() ctx: any,
        @Info() info: GraphQLResolveInfo,
        @Args() args: AggregateNewsArgs,
    ): Promise<AggregateNews> {
        return ctx.prisma.news.aggregate({
            ...args,
            select: {
                _count: true,
            },
        });
    }

    //createNews
    @Mutation(_returns => News, {
        nullable: false,
    })
    async createNews(@Ctx() ctx: any, @Args() args: CreateCustomNewsArgs): Promise<News> {
        return CreateNewsFunction(ctx, args);
    }

    //updateNews
    @Mutation(_returns => News, {
        nullable: false,
    })
    async updateNews(@Ctx() ctx: any, @Args() args: UpdateCustomNewsArgs): Promise<News> {
        return UpdateNewsFunction(ctx, args);
    }

    //deleteNews
    @Mutation(_returns => News, {
        nullable: false,
    })
    async deleteNews(@Ctx() ctx: any, @Args() args: DeleteOneNewsArgs): Promise<News> {
        return ctx.prisma.news.delete({
            ...args,
        });
    }
}
