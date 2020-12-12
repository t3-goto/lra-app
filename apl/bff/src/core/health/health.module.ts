import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { CustomHealthIndicator } from './CustomHealthIndicator';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [CustomHealthIndicator],
})
export class HealthModule {}
