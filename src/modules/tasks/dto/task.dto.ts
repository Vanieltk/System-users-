import { FilterableField, FilterableRelation } from '@nestjs-query/query-graphql';
import { ObjectType, registerEnumType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { UserDTO } from 'src/modules/users/dto/user.dto';
import { ServiceDTO } from 'src/modules/services/dto/service.dto';
import { TaskStatus } from '../entities/task.entity';

registerEnumType(TaskStatus, {
  name: "taskStatus",
});

@ObjectType('Task')
@FilterableRelation('users', () => UserDTO, { nullable: true })
@FilterableRelation('services', () => ServiceDTO, { nullable: true })
export class TaskDTO extends BaseDTO {

  @FilterableField()
  name: string;
  
  @FilterableField()
  expectedDeliveryDate: Date;

  @FilterableField()
  deliveryDate: Date;

  @FilterableField(() => TaskStatus ,{ nullable: true  })
  taskStatus?: TaskStatus;
  
}