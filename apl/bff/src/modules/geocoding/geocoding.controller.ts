import { Controller, Query, Get } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { GeocodingService } from './geocoding.service';
import { GetGeocodingInDto, GetGeocodingOutDto } from './dto';

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
}
