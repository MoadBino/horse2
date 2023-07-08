import { Resolver, Query, Mutation, Ctx, Info, Args } from 'type-graphql';
import {
    FindManyHorsesArgs,
    FindUniqueHorsesArgs,
    DeleteOneHorsesArgs,
    AggregateHorses,
    AggregateHorsesArgs,
    Horses,
} from '@generated/type-graphql';
import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../../context';
import { CreateCustomHorseArgs } from './ArgsTypesCreateHorse';
import CreateHorseFunction from './CreateHorse';
import { UpdateCustomHorseArgs } from './ArgsTypesUpdateHorse';
import UpdateHorseFunction from './UpdateHorse';

Resolver(_of => Horses);
export class HorsesResolver {
    //getAllHorses
    @Query(_returns => [Horses], {
        nullable: false,
    })
    async getAllHorses(@Ctx() ctx: Context, @Args() args: FindManyHorsesArgs): Promise<Horses[]> {
        return ctx.prisma.horses.findMany({
            ...args,
        });
    }

    //getHorseById
    @Query(_returns => Horses, {
        nullable: false,
    })
    async getHorseById(
        @Ctx() ctx: Context,
        @Args() args: FindUniqueHorsesArgs,
    ): Promise<Horses | null> {
        return ctx.prisma.horses.findUnique(args);
    }

    //getHorsesCount
    @Query(_returns => AggregateHorses, {
        nullable: false,
    })
    async getHorsesCount(
        @Ctx() ctx: any,
        @Info() info: GraphQLResolveInfo,
        @Args() args: AggregateHorsesArgs,
    ): Promise<AggregateHorses> {
        return ctx.prisma.horses.aggregate({
            ...args,
            select: {
                _count: true,
            },
        });
    }

    //createHorse
    @Mutation(_returns => Horses, {
        nullable: false,
    })
    async createHorse(@Ctx() ctx: any, @Args() args: CreateCustomHorseArgs): Promise<Horses> {
        return CreateHorseFunction(ctx, args);
    }

    //updateHorse
    @Mutation(_returns => Horses, {
        nullable: false,
    })
    async updateHorse(@Ctx() ctx: any, @Args() args: UpdateCustomHorseArgs): Promise<Horses> {
        return UpdateHorseFunction(ctx, args);
    }

    //deleteHorse
    @Mutation(_returns => Horses, {
        nullable: false,
    })
    async deleteHorse(@Ctx() ctx: any, @Args() args: DeleteOneHorsesArgs): Promise<Horses> {
        return ctx.prisma.horses.delete({
            ...args,
        });
    }
}
