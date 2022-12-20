import { IsDate } from 'class-validator';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @CreateDateColumn({ type: 'timestamp with time zone' })
  @IsDate()
  createdAt!: Date;

  @DeleteDateColumn({ type: 'timestamp with time zone' })
  @IsDate()
  deletedAt!: Date;

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  @IsDate()
  updatedAt!: Date;
}
