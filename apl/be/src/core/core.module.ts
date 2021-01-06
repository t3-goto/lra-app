import { Module, Global } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { HealthModule } from './health/health.module';

@Global()
@Module({
  providers: [],
  imports: [ConfigModule.register({ folder: './config' }), HealthModule],
  exports: [ConfigModule.register({ folder: './config' })],
})
export class CoreModule {}
