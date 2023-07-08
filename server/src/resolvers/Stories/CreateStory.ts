import { CreateCustomStoryArgs } from './ArgsTypesCreateStory';
import { Context } from '../../context';
import { uploadToCloud } from '../../utils';

export default async function CreateHorseFunction(ctx: Context, args: CreateCustomStoryArgs) {
    const { data, files } = args;
    data.updatedAt = new Date();
    uploadToCloud({
        files,
        bucketFileName: 'Stories',
        media: data?.Media?.create,
    });

    return await ctx.prisma.stories.create({ data });
}
