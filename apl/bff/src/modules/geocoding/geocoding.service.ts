import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { GetGeocodingInDto } from './dto/get-geocoding-in.dto';
import { GetGeocodingOutDto } from './dto/get-geocoding-out.dto';
import { ConfigService } from './../../core/config/config.service';
import { HttpClientService } from 'src/shared/http-client/http-client.service';
import { GoogleGeocodingApiResponseSchema } from '../../interfaces/google-geocoding-api-response-shema';

@Injectable()
export class GeocodingService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpClientService: HttpClientService
  ) {}
  async findByKeys(
    getGeocodingInDto: GetGeocodingInDto
  ): Promise<GetGeocodingOutDto> {
    let googleGeocodingUrl = `${this.configService.get(
      'HTTP_URL_GOOGLE_GEOCODING'
    )}?key=${this.configService.get('ACCESS_KEY_GOOGLE')}`;
    if (!!getGeocodingInDto.address) {
      googleGeocodingUrl = `${googleGeocodingUrl}&address=${encodeURIComponent(
        getGeocodingInDto.address
      )}`;
    } else {
      throw new BadRequestException(`"Request failed with status code 400`);
    }

    try {
      const httpResponse = await this.httpClientService.get<GoogleGeocodingApiResponseSchema>(
        googleGeocodingUrl
      );
      const latitude = httpResponse.data.results[0].geometry.location.lat;
      const longitude = httpResponse.data.results[0].geometry.location.lng;
      const getGeocodingOutDto = new GetGeocodingOutDto();
      getGeocodingOutDto.latitude = latitude;
      getGeocodingOutDto.longitude = longitude;
      return getGeocodingOutDto;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
