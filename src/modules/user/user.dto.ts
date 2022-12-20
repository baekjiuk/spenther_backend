import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserDTO {
  @Field(() => String)
  email: string;
}
