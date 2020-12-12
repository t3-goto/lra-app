import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { ConfigService } from './../../core/config/config.service';

@Injectable()
export class RedisCacheService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
    private readonly configService: ConfigService
  ) {}

  async get(key): Promise<any> {
    return await this.cache.get(key);
  }

  async set(key, value) {
    await this.cache.set(key, value, {
      ttl: this.configService.cacheModuleOptions.ttl,
    });
  }
}
