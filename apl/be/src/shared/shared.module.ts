import { Module } from '@nestjs/common';

import { CacheClientModule } from './cache-client/cache-client.module';
import { HttpClientModule } from './http-client/http-client.module';
import { CustomLoggerModule } from './custom-logger/custom-logger.module';
import { GrpcClientModule } from './grpc-client/grpc-client.module';

@Module({
  providers: [],
  imports: [
    CacheClientModule,
    HttpClientModule,
    CustomLoggerModule,
    GrpcClientModule,
  ],
  exports: [
    CacheClientModule,
    HttpClientModule,
    CustomLoggerModule,
    GrpcClientModule,
  ],
})
export class SharedModule {}
