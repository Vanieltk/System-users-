import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Service } from 'src/modules/services/entities/service.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum TaskStatus {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  FINISHED = "FINISHED",
}

@Entity()
export class Task extends BaseEntity {

  @Column()
  name: string;
  
  @Column()
  expectedDeliveryDate: Date;

  @Column()
  deliveryDate: Date;

  @Column({ type: 'enum', enum: TaskStatus , nullable: true  })
  taskStatus?: TaskStatus;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;

  @Column({nullable: true})
  userId?: string;

  @ManyToOne(() => Service, (service) => service.tasks, {onDelete:'CASCADE'})
  service: Service;
}