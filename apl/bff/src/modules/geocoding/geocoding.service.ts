import { Injectable, NotFoundException } from '@nestjs/common';
import { GetGeocodingInDto, GetGeocodingOutDto } from './dto';
import { GrpcClientService } from 'src/shared/grpc-client/grpc-client.service';
import { GetGeocodingRequest } from '../../interfaces';

@Injectable()
export class GeocodingService {
  constructor(private readonly grpcClientService: GrpcClientService) {}

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
}
