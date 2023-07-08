import { CreateCustomNewsArgs } from './ArgsTypesCreateNews';
import { Context } from '../../context';
import { uploadToCloud } from '../../utils';

export default async function CreateNewsFunction(ctx: Context, args: CreateCustomNewsArgs) {
    const { data, files } = args;
    data.updatedAt = new Date();
    uploadToCloud({
        files,
        bucketFileName: 'News',
        media: data?.Media?.create,
    });

    return await ctx.prisma.news.create({ data });
}
