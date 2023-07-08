import { UpdateCustomStoryArgs } from './ArgsTypesUpdateStory';
import { Context } from '../../context';
import { uploadToCloud, deleteMedia } from '../../utils';

export default async function UpdateHorseFunction(ctx: Context, args: UpdateCustomStoryArgs) {
    const { where, data, files } = args;
    data.updatedAt.set = new Date();
    uploadToCloud({
        files,
        bucketFileName: 'Stories',
        media: data?.Media?.create,
    });
    if (data?.Media?.delete) {
        deleteMedia({ bucketFileName: 'Stories', media: data?.Media?.delete });
    }
    return await ctx.prisma.stories.update({ where, data });
}
