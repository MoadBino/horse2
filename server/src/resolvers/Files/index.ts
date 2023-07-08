import { Resolver, Query, Mutation, Ctx, Info, Args } from 'type-graphql';
import {
    CreateOneFilesArgs,
    FindManyFilesArgs,
    FindUniqueFilesArgs,
    DeleteOneFilesArgs,
    AggregateFiles,
    AggregateFilesArgs,
    AffectedRowsOutput,
    Files,
} from '@generated/type-graphql';
import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../../context';
import { CreateCustomFileArgs } from './ArgsTypesCreateFile';
import CreateFileFunction from './CreateFile';
import DeleteFileFunction from './DeleteFile';
import { DeleteCustomFilesArgs } from './ArgsTypesDeleteFile';

Resolver(_of => Files);
export class FilesResolver {
    //getAllFiles
    @Query(_returns => [Files], {
        nullable: false,
    })
    async getAllGalleryOrMainSliderMedia(
        @Ctx() ctx: Context,
        @Args() args: FindManyFilesArgs,
    ): Promise<Files[]> {
        return ctx.prisma.files.findMany({
            ...args,
        });
    }

    //getFileById
    @Query(_returns => Files, {
        nullable: false,
    })
    async getGalleryOrMainSliderMediaById(
        @Ctx() ctx: Context,
        @Args() args: FindUniqueFilesArgs,
    ): Promise<Files | null> {
        return ctx.prisma.files.findUnique(args);
    }

    //getFileCount
    @Query(_returns => AggregateFiles, {
        nullable: false,
    })
    async getGalleryOrMainSliderMediaCount(
        @Ctx() ctx: any,
        @Info() info: GraphQLResolveInfo,
        @Args() args: AggregateFilesArgs,
    ): Promise<AggregateFiles> {
        return ctx.prisma.files.aggregate({
            ...args,
            select: {
                _count: true,
            },
        });
    }

    //addGalleryMedia
    @Mutation(_returns => AffectedRowsOutput, {
        nullable: false,
    })
    async addGalleryMedia(@Ctx() ctx: any, @Args() args: CreateCustomFileArgs): Promise<AffectedRowsOutput> {
        return CreateFileFunction(ctx, args, 'gallery');
    }

    //addMainSliderMedia
    @Mutation(_returns => AffectedRowsOutput, {
        nullable: false,
    })
    async addMainSliderMedia(@Ctx() ctx: any, @Args() args: CreateCustomFileArgs): Promise<AffectedRowsOutput> {
        return CreateFileFunction(ctx, args, 'mainSlider');
    }

    //deleteMedia
    @Mutation(_returns => AffectedRowsOutput, {
        nullable: false,
    })
    async deleteMedia(@Ctx() ctx: any, @Args() args: DeleteCustomFilesArgs): Promise<AffectedRowsOutput> {
        return DeleteFileFunction(ctx, args)
    }
}
