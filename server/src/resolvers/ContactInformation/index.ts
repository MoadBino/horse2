import { Resolver, Query, Mutation, Ctx, Info, Args } from 'type-graphql';
import {
    CreateOneContactInformationArgs,
    FindManyContactInformationArgs,
    FindUniqueContactInformationArgs,
    UpdateOneContactInformationArgs,
    DeleteOneContactInformationArgs,
    AggregateContactInformation,
    AggregateContactInformationArgs,
    ContactInformation,
} from '@generated/type-graphql';
import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../../context';

Resolver(_of => ContactInformation);
export class ContactInformationResolver {
    //getAllContactInformation
    @Query(_returns => [ContactInformation], {
        nullable: false,
    })
    async getAllContactInformation(
        @Ctx() ctx: Context,
        @Args() args: FindManyContactInformationArgs,
    ): Promise<ContactInformation[]> {
        return ctx.prisma.contactInformation.findMany({
            ...args,
        });
    }

    //getContactInformationById
    @Query(_returns => ContactInformation, {
        nullable: false,
    })
    async getContactInformationById(
        @Ctx() ctx: Context,
        @Args() args: FindUniqueContactInformationArgs,
    ): Promise<ContactInformation | null> {
        return ctx.prisma.contactInformation.findUnique(args);
    }

    //getContactInformationCount
    @Query(_returns => AggregateContactInformation, {
        nullable: false,
    })
    async getContactInformationCount(
        @Ctx() ctx: any,
        @Info() info: GraphQLResolveInfo,
        @Args() args: AggregateContactInformationArgs,
    ): Promise<AggregateContactInformation> {
        return ctx.prisma.contactInformation.aggregate({
            ...args,
            select: {
                _count: true,
            },
        });
    }

    //createContactInformation
    @Mutation(_returns => ContactInformation, {
        nullable: false,
    })
    async createContactInformation(
        @Ctx() ctx: any,
        @Args() args: CreateOneContactInformationArgs,
    ): Promise<ContactInformation> {
        return ctx.prisma.ContactInformation.create({
            ...args,
        });
    }

    //updateContactInformation
    @Mutation(_returns => ContactInformation, {
        nullable: false,
    })
    async updateContactInformation(
        @Ctx() ctx: any,
        @Args() args: UpdateOneContactInformationArgs,
    ): Promise<ContactInformation> {
        return ctx.prisma.ContactInformation.update({
            ...args,
        });
    }

    //deleteContactInformation
    @Mutation(_returns => ContactInformation, {
        nullable: false,
    })
    async deleteContactInformation(
        @Ctx() ctx: any,
        @Args() args: DeleteOneContactInformationArgs,
    ): Promise<ContactInformation> {
        return ctx.prisma.contactInformation.delete({
            ...args,
        });
    }
}
