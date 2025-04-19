import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { getDataSourceOptions } from './get-data-source-options';

config();

const configService = new ConfigService();

const AppDataSource = new DataSource({
  ...getDataSourceOptions(configService),
  synchronize: false,
  entities: ['./**/entities/*.entity.ts'],
  migrations: ['./migrations/*-migration.ts'],
  migrationsRun: false,
  logging: true,
});

export default AppDataSource;
