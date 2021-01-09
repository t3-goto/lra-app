import { Module, Global } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { HealthModule } from './health/health.module';

export const CONFIG_PATH = './config';

@Global()
@Module({
  providers: [],
  imports: [ConfigModule.register({ folder: CONFIG_PATH }), HealthModule],
  exports: [ConfigModule.register({ folder: CONFIG_PATH })],
})
export class CoreModule {}
