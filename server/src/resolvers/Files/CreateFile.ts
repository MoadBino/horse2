import { CreateCustomFileArgs } from './ArgsTypesCreateFile';
import { Context } from '../../context';
import { uploadToCloud } from '../../utils';

export default async function CreateFileFunction(
  ctx: Context,
  args: CreateCustomFileArgs,
  fromWhere: String,
) {
  const { data, files } = args;
  data.forEach(file => {
    file.updatedAt = new Date();
    if (fromWhere === 'gallery') {
      file.showInGalary = true;
    }
    if (fromWhere === 'mainSlider') {
      file.isMainSliderImage = true;
    }
  });
  uploadToCloud({
    files,
    bucketFileName: fromWhere,
    media: data,
  });
  const result = await ctx.prisma.files.createMany({ data })
  console.log("🚀 ~ file: CreateFile.ts:26 ~ result:", result)
  return { count: 1 };
}
