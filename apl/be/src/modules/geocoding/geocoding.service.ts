import { Injectable, NotFoundException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { ConfigService } from './../../core/config/config.service';
import { HttpClientService } from 'src/shared/http-client/http-client.service';
import { GetGeocodingInDto, GetGeocodingOutDto } from './dto';
import { GoogleGeocodingApiRequestSchema } from '../../interfaces/google-geocoding-api-request-schema';
import { GoogleGeocodingApiResponseSchema } from '../../interfaces/google-geocoding-api-response-schema';
import { GrpcClientService } from 'src/shared/grpc-client/grpc-client.service';
import { rpc } from 'codegen/grpc';
import GetGeocodingRequest = rpc.GetGeocodingRequest;
import GetGeocodingResponse = rpc.GetGeocodingResponse;

@Injectable()
export class GeocodingService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpClientService: HttpClientService,
    private readonly grpcClientService: GrpcClientService
  ) {}

  /**
   * REST: GET /geocoding
   */
  public async findOneByKeys(
    inDto: GetGeocodingInDto
  ): Promise<GetGeocodingOutDto> {
    const request = GetGeocodingRequest.create({ ...inDto });
    try {
      const response = await this.grpcClientService.getGeocoding(request);
      return GetGeocodingOutDto.create({ ...response });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

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
      return GetGeocodingResponse.create({ latitude: lat, longitude: lng });
    } catch (error) {
      throw new RpcException(error.message);
    }
  }
}
