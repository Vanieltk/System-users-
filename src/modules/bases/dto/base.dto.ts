import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BaseDTO
 {
@FilterableField()
id: string;

@FilterableField()
createdAt: Date;

@FilterableField()
updateAt: Date;

@FilterableField()
deletedAt: Date;
}
