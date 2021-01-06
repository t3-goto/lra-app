import { Controller, Query, Get, UseInterceptors } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';
import { GrpcAccessLoggerInterceptor } from '../../interceptors/grpc-access-logger.interceptor';
import { RestaurantsService } from './restaurants.service';
import { GetRestaurantsInDto, GetRestaurantsOutDto } from './dto';
import { rpc } from 'codegen/grpc';
import GetRestaurantsRequest = rpc.GetRestaurantsRequest;
import GetRestaurantsResponse = rpc.GetRestaurantsResponse;

@Controller('restaurants')
export class RestaurantsController {
  constructor(private restaurantsService: RestaurantsService) {}

  /**
   * REST: GET /restaurants
   */
  @ApiOkResponse({ description: 'OK.', type: GetRestaurantsOutDto })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  @ApiNotFoundResponse({ description: 'Not Found.' })
  @Get()
  public async findAllByKeys(
    @Query() inDto: GetRestaurantsInDto
  ): Promise<GetRestaurantsOutDto> {
    return this.restaurantsService.findAllByKeys(inDto);
  }

  /**
   * gRPC: RestaurantsService.GetRestaurants
   */
  @UseInterceptors(GrpcAccessLoggerInterceptor)
  @GrpcMethod('RestaurantsService', 'GetRestaurants')
  public async getRestaurants(
    request: GetRestaurantsRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>
  ): Promise<GetRestaurantsResponse> {
    return await this.restaurantsService.getRestaurants(request);
  }
}
