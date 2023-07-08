import { UpdateCustomNewsArgs } from './ArgsTypesUpdateNews';
import { Context } from '../../context';
import { uploadToCloud, deleteMedia } from '../../utils';

export default async function UpdateNewsFunction(ctx: Context, args: UpdateCustomNewsArgs) {
    const { where, data, files } = args;
    data.updatedAt.set = new Date();
    uploadToCloud({
        files,
        bucketFileName: 'News',
        media: data?.Media?.create,
    });
    if (data?.Media?.delete) {
        deleteMedia({ bucketFileName: 'News', media: data?.Media?.delete });
    }
    return await ctx.prisma.news.update({ where, data });
}
