import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class SignUp {
  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  password: string;
}
