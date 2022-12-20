import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';

import { UserDTO } from '../user/user.dto';
import { SignUp } from './auth.dto';
import { AuthService } from './auth.service';

@Resolver(() => UserDTO)
export class AuthResolver {
  @Inject(AuthService)
  private authService: AuthService;

  @Query(() => UserDTO)
  u() {
    return { email: 'jiuk' };
  }

  @Mutation(() => String)
  signUp(@Args() { email, password }: SignUp) {
    return this.authService.signUp(email, password);
  }

  @Mutation(() => String)
  signIn(@Args() { email, password }: SignUp) {
    return this.authService.signIn(email, password);
  }
}
