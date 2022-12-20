import { Entity, JoinColumn, ManyToOne, RelationOptions, Unique } from 'typeorm';

import { BaseEntity } from 'src/entities/base.entity';

import { User } from '../user/user.entity';
import { Expenditure } from './expenditure.entity';

@Entity({ name: 'expenditure_members' })
@Unique(['expenditure', 'member'])
export class ExpenditureMember extends BaseEntity {
  @ManyToOne(() => Expenditure)
  @JoinColumn()
  expenditure: Expenditure;

  @ManyToOne(() => User)
  @JoinColumn()
  member: User;
}
