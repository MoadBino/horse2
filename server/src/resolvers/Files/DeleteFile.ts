import { Context } from '../../context';
import { deleteMedia } from '../../utils';
import { DeleteCustomFilesArgs } from './ArgsTypesDeleteFile';

export default async function DeleteFileFunction(
  ctx: Context,
  args: DeleteCustomFilesArgs,
) {
  const { fileNames, where, files, fromWhere } = args;
  deleteMedia({ bucketFileName: fromWhere, media: fileNames });
  const result = await ctx.prisma.files.deleteMany({ where })
  console.log("🚀 ~ file: DeleteFile.ts:12 ~ result:", result)
  return { count: 1 };
}
