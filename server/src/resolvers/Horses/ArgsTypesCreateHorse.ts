import { ArgsType, Field } from 'type-graphql';
import { HorsesCreateInput } from '@generated/type-graphql';
import { CustomCreateMediaHorses } from './ArgsTypes';

@ArgsType()
export class CreateCustomHorseArgs {
    @Field(_type => HorsesCreateInput, {
        nullable: false,
    })
    data?: HorsesCreateInput | undefined;

    @Field(_type => [CustomCreateMediaHorses], {
        nullable: true,
    })
    files?: CustomCreateMediaHorses[] | undefined;
}
