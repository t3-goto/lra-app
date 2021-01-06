import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';
import {
  CacheClientLogger,
  createCacheClientLoggerReqInfo,
  createCacheClientLoggerResInfo,
  CACHE_METHOD,
} from '../custom-logger';
import { ConfigService } from '../../core/config/config.service';
import { CacheError } from './cache-error';

@Injectable()
export class CacheClientService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
    private readonly configService: ConfigService,
    private readonly logger: CacheClientLogger
  ) {}

  public async get<T>(key: string): Promise<T> {
    this.logger.setCacheClientReqInfo(
      createCacheClientLoggerReqInfo(CACHE_METHOD.GET, key)
    );
    this.logger.info();
    return await this.cache
      .get(key)
      .then((value: T) => {
        this.logger.setCacheClientResInfo(
          createCacheClientLoggerResInfo(CACHE_METHOD.GET, key, value)
        );
        this.logger.info();
        return this.successCallback(value);
      })
      .catch(this.errorCallback);
  }

  public async set<T>(key: string, value: T): Promise<any> {
    this.logger.setCacheClientReqInfo(
      createCacheClientLoggerReqInfo(CACHE_METHOD.SET, key)
    );
    this.logger.info();
    return await this.cache
      .set(key, value, {
        ttl: this.configService.cacheModuleOptions.ttl,
      })
      .then((status) => {
        this.logger.setCacheClientResInfo(
          createCacheClientLoggerResInfo(CACHE_METHOD.SET, key, status)
        );
        this.logger.info();
        return this.successCallback(status);
      })
      .catch(this.errorCallback);
  }

  /**
   * Success Callback.
   */
  private successCallback<T>(response: T): T {
    return response;
  }

  /**
   * Error Callback.
   */
  private errorCallback(error: any): null {
    throw new CacheError(error);
  }
}
