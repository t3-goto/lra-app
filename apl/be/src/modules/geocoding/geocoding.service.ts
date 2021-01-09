import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { ConfigService } from './../../core/config/config.service';
import { HttpClientService } from 'src/shared/http-client/http-client.service';
import {
  GoogleGeocodingApiRequest,
  GoogleGeocodingApiResponse,
} from '../../interfaces';
import { GetGeocodingRequest, GetGeocodingResponse } from './interfaces';

@Injectable()
export class GeocodingService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpClientService: HttpClientService
  ) {}

  /**
   * gRPC: GeocodingService.GetGeocoding
   */
  public async getGeocoding(
    request: GetGeocodingRequest
  ): Promise<GetGeocodingResponse> {
    const googleGeocodingUrl = this.configService.get(
      'HTTP_URL_GOOGLE_GEOCODING'
    );
    const key = this.configService.get('ACCESS_KEY_GOOGLE');
    const address = request.address;
    const googleGeocodingApiRequest: GoogleGeocodingApiRequest = {
      key,
      address,
    };
    try {
      const httpResponse = await this.httpClientService.getAllByQuery<
        GoogleGeocodingApiRequest,
        GoogleGeocodingApiResponse
      >(googleGeocodingUrl, googleGeocodingApiRequest);
      const { lat, lng } = httpResponse.results[0].geometry.location;
      return GetGeocodingResponse.create({ latitude: lat, longitude: lng });
    } catch (error) {
      throw new RpcException(error.message);
    }
  }
}
