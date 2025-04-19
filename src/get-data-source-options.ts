import { ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm/data-source/DataSourceOptions';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export function getDataSourceOptions(
  configService: ConfigService,
): DataSourceOptions {
  return {
    type: 'postgres',
    host: configService.getOrThrow<string>('DB_HOST'),
    port: configService.getOrThrow<number>('DB_PORT'),
    username: configService.getOrThrow<string>('DB_USERNAME'),
    password: configService.getOrThrow<string>('DB_PASSWORD'),
    database: configService.getOrThrow<string>('DB_DATABASE'),
    synchronize: false,
    namingStrategy: new SnakeNamingStrategy(),
  };
}
