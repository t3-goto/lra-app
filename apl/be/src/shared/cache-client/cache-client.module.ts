import { Module, CacheModule } from '@nestjs/common';
import { CacheClientService } from './cache-client.service';
import { CoreModule } from '../../core/core.module';
import { ConfigService } from '../../core/config/config.service';
import { CustomLoggerModule } from './../custom-logger/custom-logger.module';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [CoreModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.cacheModuleOptions,
    }),
    CustomLoggerModule,
  ],
  providers: [CacheClientService],
  exports: [CacheClientService],
})
export class CacheClientModule {}
