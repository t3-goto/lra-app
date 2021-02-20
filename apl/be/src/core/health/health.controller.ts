import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';
import { HealthCheckRequest, HealthCheckResponse } from './interfaces';

@Controller()
export class HealthController {
  /**
   * gRPC: Health.Check
   */
  @GrpcMethod('Health', 'Check')
  public async healthCheck(
    request: HealthCheckRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>
  ): Promise<HealthCheckResponse> {
    return HealthCheckResponse.create({
      status: HealthCheckResponse.ServingStatus.SERVING,
    });
  }

  /**
   * gRPC: Health.Watch
   */
  @GrpcMethod('Health', 'Watch')
  public async healthWatch(
    request: HealthCheckRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>
  ): Promise<HealthCheckResponse> {
    return HealthCheckResponse.create({
      status: HealthCheckResponse.ServingStatus.SERVING,
    });
  }
}
