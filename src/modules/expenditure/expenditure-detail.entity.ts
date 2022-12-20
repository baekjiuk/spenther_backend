import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from 'src/entities/base.entity';

import { Expenditure } from './expenditure.entity';

@Entity({ name: 'expenditure_detail' })
export class ExpenditureDetail extends BaseEntity {
  @Column('int')
  amount: number;

  @Column('text')
  description: string;

  @ManyToOne(() => Expenditure)
  @JoinColumn()
  expenditure: Expenditure;

  @Column('text')
  tag: string;

  @Column('text')
  tagColor: string;
}
