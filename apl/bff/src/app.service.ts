import { Injectable } from '@nestjs/common';
import { RedisCacheService } from './shared/redis-cache/redis-cache.service';

@Injectable()
export class AppService {
  constructor(private readonly redisCacheService: RedisCacheService) {}
  async findAll(): Promise<string> {
    return await this.redisCacheService.get('KEY_DAZEYO');
  }

  async create() {
    await this.redisCacheService.set('KEY_DAZEYO', 'key dazeyo!');
    return 'post true';
  }
}
