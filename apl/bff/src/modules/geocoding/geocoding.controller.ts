import { Controller, Query, Get } from '@nestjs/common';
import { GeocodingService } from './geocoding.service';
import { GetGeocodingInDto } from './dto/get-geocoding-in.dto';
import { GetGeocodingOutDto } from './dto/get-geocoding-out.dto';

@Controller('geocoding')
export class GeocodingController {
  constructor(private geocodingService: GeocodingService) {}

  @Get()
  async findByKeys(
    @Query() getGeocodingInDto: GetGeocodingInDto
  ): Promise<GetGeocodingOutDto> {
    return this.geocodingService.findByKeys(getGeocodingInDto);
  }
}
