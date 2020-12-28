import { Controller, Query, Get } from '@nestjs/common';
import { GeocodingService } from './geocoding.service';
import { GetGeocodingDto } from './dto/get-geocoding.dto';

@Controller('geocoding')
export class GeocodingController {
  constructor(private geocodingService: GeocodingService) {}

  @Get()
  async findByKeys(@Query() getGeocodingDto: GetGeocodingDto): Promise<any> {
    return this.geocodingService.findByKeys(getGeocodingDto);
  }
}
