import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';
import { RestaurantsService } from './restaurants.service';
import { GetRestaurantsRequest, GetRestaurantsResponse } from './interfaces';

@Controller()
export class RestaurantsController {
  constructor(private restaurantsService: RestaurantsService) {}

  /**
   * gRPC: RestaurantsService.GetRestaurants
   */
  @GrpcMethod('RestaurantsService', 'GetRestaurants')
  public async getRestaurants(
    request: GetRestaurantsRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>
  ): Promise<GetRestaurantsResponse> {
    return await this.restaurantsService.getRestaurants(request);
  }
}
