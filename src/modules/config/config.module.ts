import { ConfigModule as NestConfigModule } from '@nestjs/config';

import auth from './configuration/auth';

const ENV = process.env.NODE_ENV || 'dev';

export const ConfigModule = NestConfigModule.forRoot({
  envFilePath: `.env.${ENV}`,
  load: [auth],
});
