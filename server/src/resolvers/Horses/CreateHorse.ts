import { CreateCustomHorseArgs } from './ArgsTypesCreateHorse';
import { Context } from '../../context';
import { uploadToCloud } from '../../utils';

export default async function CreateHorseFunction(ctx: Context, args: CreateCustomHorseArgs) {
    const { data, files } = args;
    data.updatedAt = new Date();
    uploadToCloud({
        files,
        bucketFileName: 'horses',
        media: data?.Media?.create,
    });

    return await ctx.prisma.horses.create({ data });
}
