import { Injectable, NotFoundException } from '@nestjs/common';
import { GetGeocodingDto } from './dto/get-geocoding.dto';
import { ConfigService } from './../../core/config/config.service';
import { HttpClientService } from 'src/shared/http-client/http-client.service';

@Injectable()
export class GeocodingService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpClientService: HttpClientService
  ) {}
  async findByKeys(getGeocodingDto: GetGeocodingDto): Promise<any> {
    let googleGeocodingUrl = `${this.configService.get(
      'HTTP_URL_GOOGLE_GEOCODING'
    )}?key=${this.configService.get('ACCESS_KEY_GOOGLE')}`;
    if (!!getGeocodingDto.address) {
      googleGeocodingUrl = `${googleGeocodingUrl}&address=${encodeURIComponent(
        getGeocodingDto.address
      )}`;
    }

    try {
      const msg = await this.httpClientService.get(googleGeocodingUrl);
      return msg.data;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
