import { Injectable, NotFoundException } from '@nestjs/common';
import { GetRestaurantsDto } from './dto/get-restaurants.dto';
import { ConfigService } from './../../core/config/config.service';
import { HttpClientService } from 'src/shared/http-client/http-client.service';

@Injectable()
export class RestaurantsService {
  private DEFAULT_RANGE = 3;
  private DEFAULT_HIT_PER_PAGE = 100;
  private DEFAULT_OFFSET_PAGE = 1;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpClientService: HttpClientService
  ) {}

  async findByKeys(getRestaurantsDto: GetRestaurantsDto): Promise<any> {
    let url = `${this.configService.get(
      'HTTP_URL_GNAVI'
    )}?keyid=${this.configService.get('ACCESS_KEY_GNAVI')}`;

    if (!!getRestaurantsDto.latitude) {
      url = `${url}&latitude=${getRestaurantsDto.latitude}`;
    }

    if (!!getRestaurantsDto.longitude) {
      url = `${url}&longitude=${getRestaurantsDto.longitude}`;
    }

    if (!!getRestaurantsDto.range) {
      url = `${url}&range=${getRestaurantsDto.range}`;
    } else {
      url = `${url}&range=${this.DEFAULT_RANGE}`;
    }

    if (!!getRestaurantsDto.hit_per_page) {
      url = `${url}&hit_per_page=${getRestaurantsDto.hit_per_page}`;
    } else {
      url = `${url}&hit_per_page=${this.DEFAULT_HIT_PER_PAGE}`;
    }

    if (!!getRestaurantsDto.offset_page) {
      url = `${url}&offset_page=${getRestaurantsDto.offset_page}`;
    } else {
      url = `${url}&offset_page=${this.DEFAULT_OFFSET_PAGE}`;
    }

    try {
      const msg = await this.httpClientService.get(url);
      return msg.data;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
