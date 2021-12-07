
import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';


@ObjectType('User')
export class UserDTO extends BaseDTO{

  @FilterableField()
  name: string;
  cpf: number;

  @FilterableField()
  key: string;
}
