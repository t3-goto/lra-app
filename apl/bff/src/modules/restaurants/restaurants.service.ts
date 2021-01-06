import { Injectable, NotFoundException } from '@nestjs/common';
import { GetRestaurantsInDto, GetRestaurantsOutDto, Restaurant } from './dto';
import { GrpcClientService } from 'src/shared/grpc-client/grpc-client.service';
import { rpc } from 'codegen/grpc';
import GetRestaurantsRequest = rpc.GetRestaurantsRequest;

@Injectable()
export class RestaurantsService {
  constructor(private readonly grpcClientService: GrpcClientService) {}

  /**
   * REST: GET /restaurants
   */
  public async findAllByKeys(
    inDto: GetRestaurantsInDto
  ): Promise<GetRestaurantsOutDto> {
    const {
      latitude,
      longitude,
      range,
      hitPerPage,
      pageOffset,
      address,
    } = inDto;
    const request = GetRestaurantsRequest.create({
      latitude,
      longitude,
      range,
      hitPerPage,
      pageOffset,
      address,
    });
    try {
      const response = await this.grpcClientService.getRestaurants(request);
      const restaurants = response.restaurants as Restaurant[];
      return GetRestaurantsOutDto.create({
        ...response,
        restaurants,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
