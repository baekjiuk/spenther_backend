import { Inject, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { Me } from 'src/decorators/me.decorator';
import { GqlGuard } from 'src/guards/gql.guard';

import { User } from '../user/user.entity';
import {
  CreateExpenditureDetailDTO,
  CreateExpenditureDTO,
  ExpenditureDetailDTO,
  ExpenditureDTO,
} from './expenditure.dto';
import { ExpenditureService } from './expenditure.service';

@UseGuards(GqlGuard)
@Resolver(() => ExpenditureDTO)
export class ExpenditureResolver {
  @Inject(ExpenditureService)
  private expenditureService: ExpenditureService;

  @Mutation(() => ExpenditureDTO)
  createExpenditure(@Args() { title }: CreateExpenditureDTO, @Me() me: User) {
    return this.expenditureService.createExpenditure(title, me);
  }

  @Mutation(() => ExpenditureDetailDTO)
  createExpenditureDetail(@Args() { expenditureId, data }: CreateExpenditureDetailDTO) {
    return this.expenditureService.createExpenditureDetail(expenditureId, data);
  }
}
