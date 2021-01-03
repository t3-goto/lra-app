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

  @ApiOkResponse({ description: 'OK.', type: GetRestaurantsOutDto })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  @ApiNotFoundResponse({ description: 'Not Found.' })
  @Get()
  public async findAllByKeys(
    @Query() getRestaurantsInDto: GetRestaurantsInDto
  ): Promise<GetRestaurantsOutDto> {
    return this.restaurantsService.findAllByKeys(getRestaurantsInDto);
  }

  @UseInterceptors(GrpcAccessLoggerInterceptor)
  @GrpcMethod('RestaurantsService', 'GetRestaurants')
  public async findAllByKeysGrpc(
    request: GetRestaurantsRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>
  ): Promise<GetRestaurantsResponse> {
    const getRestaurantsInDto = request as GetRestaurantsInDto;
    const getRestaurantsOutDto = await this.restaurantsService.findAllByKeys(
      getRestaurantsInDto
    );
    const response = getRestaurantsOutDto as GetRestaurantsResponse;
    return response;
  }
}
