import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, HealthCheck } from '@nestjs/terminus';
import { CustomHealthIndicator } from './CustomHealthIndicator';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private customHealthIndicator: CustomHealthIndicator
  ) {}

  @Get('liveness')
  @HealthCheck()
  liveness() {
    return this.health.check([
      () => this.customHealthIndicator.isHealthy('healt check'),
    ]);
  }

  @Get('readiness')
  @HealthCheck()
  readiness() {
    return this.health.check([
      () => this.customHealthIndicator.isHealthy('healt check'),
    ]);
  }
}
