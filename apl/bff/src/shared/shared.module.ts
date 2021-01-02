import { Module } from '@nestjs/common';

import { RedisCacheModule } from './redis-cache/redis-cache.module';
import { HttpClientModule } from './http-client/http-client.module';
import { CustomLoggerModule } from './custom-logger/custom-logger.module';
import { GrpcClientModule } from './grpc-client/grpc-client.module';

@Module({
  providers: [],
  imports: [
    RedisCacheModule,
    HttpClientModule,
    CustomLoggerModule,
    GrpcClientModule,
  ],
  exports: [
    RedisCacheModule,
    HttpClientModule,
    CustomLoggerModule,
    GrpcClientModule,
  ],
})
export class SharedModule {}
