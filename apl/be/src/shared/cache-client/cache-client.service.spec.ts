import { Test, TestingModule } from '@nestjs/testing';
import { CacheClientService } from './cache-client.service';

describe('CacheClientService', () => {
  let service: CacheClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CacheClientService],
    }).compile();

    service = module.get<CacheClientService>(CacheClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
