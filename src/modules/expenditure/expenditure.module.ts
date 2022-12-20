import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from '../user/user.module';
import { ExpenditureDetail } from './expenditure-detail.entity';
import { ExpenditureMember } from './expenditure-member.entity';
import { Expenditure } from './expenditure.entity';
import { ExpenditureResolver } from './expenditure.resolver';
import { ExpenditureService } from './expenditure.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Expenditure, ExpenditureDetail, ExpenditureMember]),
    UserModule,
  ],
  providers: [ExpenditureResolver, ExpenditureService],
})
export class ExpenditureModule {}
