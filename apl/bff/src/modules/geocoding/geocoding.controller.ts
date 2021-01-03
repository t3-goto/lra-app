import { Controller, Query, Get, UseInterceptors } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';
import { GrpcAccessLoggerInterceptor } from '../../interceptors/grpc-access-logger.interceptor';
import { GeocodingService } from './geocoding.service';
import { GetGeocodingInDto, GetGeocodingOutDto } from './dto';
import { rpc } from 'codegen/grpc';
import GetGeocodingRequest = rpc.GetGeocodingRequest;
import GetGeocodingResponse = rpc.GetGeocodingResponse;

@Controller('geocoding')
export class GeocodingController {
  constructor(private geocodingService: GeocodingService) {}

  @ApiOkResponse({ description: 'OK.', type: GetGeocodingOutDto })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  @ApiNotFoundResponse({ description: 'Not Found.' })
  @Get()
  public async findOneByKeys(
    @Query() getGeocodingInDto: GetGeocodingInDto
  ): Promise<GetGeocodingOutDto> {
    return this.geocodingService.findOneByKeys(getGeocodingInDto);
  }

  @UseInterceptors(GrpcAccessLoggerInterceptor)
  @GrpcMethod('GeocodingService', 'GetGeocoding')
  public async findOneByKeysGrpc(
    request: GetGeocodingRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>
  ): Promise<GetGeocodingResponse> {
    const getGeocodingInDto = request as GetGeocodingInDto;
    const getGeocodingOutDto = await this.geocodingService.findOneByKeys(
      getGeocodingInDto
    );
    const response = getGeocodingOutDto as GetGeocodingResponse;
    return response;
  }
}
