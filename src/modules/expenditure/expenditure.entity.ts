import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from 'src/entities/base.entity';

import { User } from '../user/user.entity';

@Entity({ name: 'expenditures' })
export class Expenditure extends BaseEntity {
  @ManyToOne(() => User)
  @JoinColumn()
  creator: User;

  @Column('text')
  title: string;
}
