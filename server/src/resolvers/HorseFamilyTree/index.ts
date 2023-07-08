import { Resolver, Query, Mutation, Ctx, Info, Args } from 'type-graphql';
import {
    CreateOneHorseFamilyTreeArgs,
    FindManyHorseFamilyTreeArgs,
    FindUniqueHorseFamilyTreeArgs,
    UpdateOneHorseFamilyTreeArgs,
    DeleteOneHorseFamilyTreeArgs,
    AggregateHorseFamilyTree,
    AggregateHorseFamilyTreeArgs,
    HorseFamilyTree,
} from '@generated/type-graphql';
import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../../context';

Resolver(_of => HorseFamilyTree);
export class HorseFamilyTreeResolver {
    //getAllHorseFamilyTree
    @Query(_returns => [HorseFamilyTree], {
        nullable: false,
    })
    async getAllHorseFamilyTree(
        @Ctx() ctx: Context,
        @Args() args: FindManyHorseFamilyTreeArgs,
    ): Promise<HorseFamilyTree[]> {
        return ctx.prisma.horseFamilyTree.findMany({
            ...args,
        });
    }

    //getHorseFamilyTreeById
    @Query(_returns => HorseFamilyTree, {
        nullable: false,
    })
    async getHorseById(
        @Ctx() ctx: Context,
        @Args() args: FindUniqueHorseFamilyTreeArgs,
    ): Promise<HorseFamilyTree | null> {
        return ctx.prisma.horseFamilyTree.findUnique(args);
    }

    //getHorseFamilyTreeCount
    @Query(_returns => AggregateHorseFamilyTree, {
        nullable: false,
    })
    async getHorseFamilyTreeCount(
        @Ctx() ctx: any,
        @Info() info: GraphQLResolveInfo,
        @Args() args: AggregateHorseFamilyTreeArgs,
    ): Promise<AggregateHorseFamilyTree> {
        return ctx.prisma.horseFamilyTree.aggregate({
            ...args,
            select: {
                _count: true,
            },
        });
    }

    //createHorseFamilyTree
    @Mutation(_returns => HorseFamilyTree, {
        nullable: false,
    })
    async createHorseFamilyTree(
        @Ctx() ctx: any,
        @Args() args: CreateOneHorseFamilyTreeArgs,
    ): Promise<HorseFamilyTree> {
        return ctx.prisma.horseFamilyTree.create({
            ...args,
        });
    }
    /*
{
  "data": {
    "nameEn": "PEACE FROM THE DESERT",
    "nameAr": "سلام من الصحراء",
    "dateOfBirth": "29-05-2010",
    "HorseFamilyTree2": {
      "create": [
        {
          "fr": "MARWAN AL SHAQAB",
          "mo": "FS PENELOPE",
          "Father": {
            "create": [
              {
                "fr": "GAZAL AL SHAQAB",
                "mo": "LITTLE LIZA FAME",
                "Father": {
                  "create": [
                    {
                      "fr": "ANAZA EL FARID",
                      "mo": "KAJORA",
                      "Father": {
                        "create": [
                          {
                            "fr": "RUMINAJA ALI",
                            "mo": "BINT DEENAA"
                          }
                        ]
                      },
                      "Mother": {
                        "create": [
                          {
                            "fr": "KABORR",
                            "mo": "EDJORA"
                          }
                        ]
                      }
                    }
                  ]
                },
                "Mother": {
                  "create": [
                    {
                      "fr": "FAME VF",
                      "mo": "KATAHZA",
                      "Father": {
                        "create": [
                          {
                            "fr": "BEY SHAH",
                            "mo": "RAFFOLETA-ROSE"
                          }
                        ]
                      },
                      "Mother": {
                        "create": [
                          {
                            "fr": "AZA DESTINY",
                            "mo": "AFHAR RAHZA"
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          },
          "Mother": {
            "create": [
              {
                "fr": "FS BENGALI",
                "mo": "FS PRECIOUS MEMORY",
                "Father": {
                  "create": [
                    {
                      "fr": "KUBINEC",
                      "mo": "OM EL SANADIVA",
                      "Father": {
                        "create": [
                          {
                            "fr": "BALATON",
                            "mo": "KOSMETIKA"
                          }
                        ]
                      },
                      "Mother": {
                        "create": [
                          {
                            "fr": "SANADIK EL SHAKLAN",
                            "mo": "DE LA REINA"
                          }
                        ]
                      }
                    }
                  ]
                },
                "Mother": {
                  "create": [
                    {
                      "fr": "KUBINEC",
                      "mo": "PRECIOUS ME",
                      "Father": {
                        "create": [
                          {
                            "fr": "BALATON",
                            "mo": "KOSMETIKA"
                          }
                        ]
                      },
                      "Mother": {
                        "create": [
                          {
                            "fr": "WILDWOOD KOCHAR",
                            "mo": "GAI FERZON DREAM"
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
}
*/
    //updateHorseFamilyTree
    @Mutation(_returns => HorseFamilyTree, {
        nullable: false,
    })
    async updateHorseFamilyTree(
        @Ctx() ctx: any,
        @Args() args: UpdateOneHorseFamilyTreeArgs,
    ): Promise<HorseFamilyTree> {
        return ctx.prisma.horseFamilyTree.update({
            ...args,
        });
    }

    //deleteHorseFamilyTree
    @Mutation(_returns => HorseFamilyTree, {
        nullable: false,
    })
    async deleteHorseFamilyTree(
        @Ctx() ctx: any,
        @Args() args: DeleteOneHorseFamilyTreeArgs,
    ): Promise<HorseFamilyTree> {
        return ctx.prisma.horseFamilyTree.delete({
            ...args,
        });
    }
}
