
import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';


@ObjectType('User')
export class UserDTO {
  @Field()
  id:string;

  @FilterableField()
  name: string;
  cpf: number;

  @FilterableField()
  key: string;
}
