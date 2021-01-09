import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';
import { GeocodingService } from './geocoding.service';
import { GetGeocodingRequest, GetGeocodingResponse } from './interfaces';

@Controller()
export class GeocodingController {
  constructor(private geocodingService: GeocodingService) {}

  /**
   * gRPC: GeocodingService.GetGeocoding
   */
  @GrpcMethod('GeocodingService', 'GetGeocoding')
  public async getGeocoding(
    request: GetGeocodingRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>
  ): Promise<GetGeocodingResponse> {
    return await this.geocodingService.getGeocoding(request);
  }
}
