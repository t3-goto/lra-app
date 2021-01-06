import { Controller, Get } from '@nestjs/common';
import {
  MemoryHealthIndicator,
  HealthCheckService,
  HealthCheck,
} from '@nestjs/terminus';
import { CustomHealthIndicator } from './CustomHealthIndicator';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private memoryHealthIndicator: MemoryHealthIndicator,
    private customHealthIndicator: CustomHealthIndicator
  ) {}

  @Get('readiness')
  @HealthCheck()
  check() {
    return this.health.check([
      () =>
        // this.memoryHealthIndicator.checkHeap('memory_heap', 150 * 1024 * 1024),
        this.customHealthIndicator.isHealthy('healt check'),
    ]);
  }
}
