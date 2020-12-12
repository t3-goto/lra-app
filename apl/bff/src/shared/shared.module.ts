import { Module } from '@nestjs/common';

import { RedisCacheModule } from './redis-cache/redis-cache.module';
import { HttpClientModule } from './http-client/http-client.module';
import { CustomLoggerModule } from './custom-logger/custom-logger.module';

@Module({
  providers: [],
  imports: [RedisCacheModule, HttpClientModule, CustomLoggerModule],
  exports: [RedisCacheModule, HttpClientModule, CustomLoggerModule],
})
export class SharedModule {}
