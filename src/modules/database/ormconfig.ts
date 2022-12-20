import { join } from 'path';
import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  database: 'expenditure',
  entities: [join(__dirname, '../*/*.entity.{ts,js}')],
  host: 'localhost',
  logging: true,
  migrations: [join(__dirname, '../../migrations/*.{ts,js}')],
  port: 5432,
  synchronize: false,
  type: 'postgres',
};

export default config;
