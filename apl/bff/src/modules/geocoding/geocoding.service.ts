import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from './../../core/config/config.service';
import { HttpClientService } from 'src/shared/http-client/http-client.service';
import { GetGeocodingInDto } from './dto/get-geocoding-in.dto';
import { GetGeocodingOutDto } from './dto/get-geocoding-out.dto';
import { GoogleGeocodingApiRequestSchema } from '../../interfaces/google-geocoding-api-request-schema';
import { GoogleGeocodingApiResponseSchema } from '../../interfaces/google-geocoding-api-response-schema';

@Injectable()
export class GeocodingService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpClientService: HttpClientService
  ) {}
  async findByKeys(
    getGeocodingInDto: GetGeocodingInDto
  ): Promise<GetGeocodingOutDto> {
    const googleGeocodingUrl = this.configService.get(
      'HTTP_URL_GOOGLE_GEOCODING'
    );
    const key = this.configService.get('ACCESS_KEY_GOOGLE');
    const address = getGeocodingInDto.address;
    const googleGeocodingApiRequestSchema: GoogleGeocodingApiRequestSchema = {
      key,
      address,
    };
    try {
      const httpResponse = await this.httpClientService.getAllByQuery<
        GoogleGeocodingApiRequestSchema,
        GoogleGeocodingApiResponseSchema
      >(googleGeocodingUrl, googleGeocodingApiRequestSchema);
      const { lat, lng } = httpResponse.results[0].geometry.location;
      return new GetGeocodingOutDto(lat, lng);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
