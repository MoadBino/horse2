import { ArgsType, Field, InputType, registerEnumType } from 'type-graphql';
import { FilesWhereUniqueInput } from '@generated/type-graphql';
import { CustomCreateMediaFiles } from './ArgsTypes';
import { IsIn } from 'class-validator';

@InputType()
export class FileData {
    @Field(_type => String, {
        nullable: true,
    })
    fileName?: String | undefined;
}

enum FromWhere_type {
    gallery = 'gallery',
    mainSlider = 'mainSlider',
}
registerEnumType(FromWhere_type, {
    name: 'FromWhere_type',
    description: undefined,
});

@ArgsType()
export class DeleteCustomFilesArgs {
    @Field(_type => [CustomCreateMediaFiles], {
        nullable: true,
    })
    fileNames?: FileData[] | undefined;

    @Field(_type => FilesWhereUniqueInput, {
        nullable: false,
    })
    where!: FilesWhereUniqueInput;

    @Field(_type => [CustomCreateMediaFiles], {
        nullable: true,
    })
    files?: CustomCreateMediaFiles[] | undefined;

    @IsIn(Object.values(FromWhere_type))
    @Field(_type => FromWhere_type, {
        nullable: false,
    })
    fromWhere!: 'gallery' | 'mainSlider';
}
