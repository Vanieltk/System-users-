
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity{

  @Column()
  name: string;
  cpf: number;
  @Column()
  key: string;
}
