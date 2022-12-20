import { TypeOrmModule } from '@nestjs/typeorm';

import ormconfig from './ormconfig';

export const DatabaseModule = TypeOrmModule.forRoot({
  ...ormconfig,
  autoLoadEntities: true,
  keepConnectionAlive: true,
});
