
import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity{

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  key: string;
  tasks: any;
}
