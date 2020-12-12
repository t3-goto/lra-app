import { Module, CacheModule } from '@nestjs/common';
import { RedisCacheService } from './redis-cache.service';
import { CoreModule } from './../../core/core.module';
import { ConfigService } from './../../core/config/config.service';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [CoreModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.cacheModuleOptions,
    }),
  ],
  providers: [RedisCacheService],
  exports: [RedisCacheService],
})
export class RedisCacheModule {}
