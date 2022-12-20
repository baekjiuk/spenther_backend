import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from './modules/config/config.module';
import { DatabaseModule } from './modules/database/database.module';
import { ExpenditureModule } from './modules/expenditure/expenditure.module';
import { GraphqlModule } from './modules/graphql/graphql.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [AuthModule, ConfigModule, DatabaseModule, ExpenditureModule, GraphqlModule, UserModule],
})
export class AppModule {}
