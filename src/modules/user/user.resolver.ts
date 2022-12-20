import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

import { Me } from 'src/decorators/me.decorator';
import { GqlGuard } from 'src/guards/gql.guard';

import { UserDTO } from './user.dto';
import { User } from './user.entity';

@UseGuards(GqlGuard)
@Resolver(() => UserDTO)
export class UserResolver {
  @Query(() => UserDTO)
  user(@Me() me: User) {
    return me;
  }
}
