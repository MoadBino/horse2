import { ArgsType, Field } from 'type-graphql';
import { HorsesWhereUniqueInput, HorsesUpdateInput } from '@generated/type-graphql';
import { CustomCreateMediaHorses } from './ArgsTypes';

@ArgsType()
export class UpdateCustomHorseArgs {
    @Field(_type => HorsesUpdateInput, {
        nullable: false,
    })
    data!: HorsesUpdateInput;

    @Field(_type => HorsesWhereUniqueInput, {
        nullable: false,
    })
    where!: HorsesWhereUniqueInput;

    @Field(_type => [CustomCreateMediaHorses], {
        nullable: true,
    })
    files?: CustomCreateMediaHorses[] | undefined;
}
