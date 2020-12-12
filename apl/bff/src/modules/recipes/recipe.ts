import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Recipe {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;
}
