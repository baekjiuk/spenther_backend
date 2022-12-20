import { IsEmail } from 'class-validator';
import { Column, Entity } from 'typeorm';

import { BaseEntity } from 'src/entities/base.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Column('text')
  @IsEmail()
  email!: string;

  @Column('text', { nullable: true })
  password: string;

  payload() {
    return {
      id: this.id,
      email: this.email,
    };
  }
}
