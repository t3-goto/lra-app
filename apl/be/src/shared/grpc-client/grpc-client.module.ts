import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { CoreModule } from './../../core/core.module';
import { ConfigService } from './../../core/config/config.service';
import { CustomLoggerModule } from './../custom-logger/custom-logger.module';
import { GrpcClientService } from './grpc-client.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        imports: [CoreModule],
        name: 'GRPC_GEOCODING',
        useFactory: async (configService: ConfigService) =>
          configService.grpcClientGeocodingOptions,
        inject: [ConfigService],
      },
      {
        imports: [CoreModule],
        name: 'GRPC_RESTAURANTS',
        useFactory: async (configService: ConfigService) =>
          configService.grpcClientRestaurantsOptions,
        inject: [ConfigService],
      },
      {
        imports: [CoreModule],
        name: 'GRPC_USERS',
        useFactory: async (configService: ConfigService) =>
          configService.grpcClientUsersOptions,
        inject: [ConfigService],
      },
    ]),
    CustomLoggerModule,
  ],
  providers: [GrpcClientService],
  exports: [GrpcClientService],
})
export class GrpcClientModule {}
