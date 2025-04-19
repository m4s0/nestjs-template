import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './typeorm-config.service';

export const typeOrmModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useClass: TypeOrmConfigService,
});
