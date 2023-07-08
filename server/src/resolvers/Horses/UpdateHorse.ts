import { UpdateCustomHorseArgs } from './ArgsTypesUpdateHorse';
import { Context } from '../../context';
import { uploadToCloud, deleteMedia } from '../../utils';

export default async function UpdateHorseFunction(ctx: Context, args: UpdateCustomHorseArgs) {
    const { where, data, files } = args;
    data.updatedAt.set = new Date();
    uploadToCloud({
        files,
        bucketFileName: 'horses',
        media: data?.Media?.create,
    });
    if (data?.Media?.delete) {
        deleteMedia({ bucketFileName: 'horses', media: data?.Media?.delete });
    }
    return await ctx.prisma.horses.update({ where, data });
}
