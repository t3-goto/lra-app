import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
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
    let gnaviUrl = `${this.configService.get(
      'HTTP_URL_GNAVI'
    )}?keyid=${this.configService.get('ACCESS_KEY_GNAVI')}`;

    if (
      !!getRestaurantsDto.latitude &&
      !!getRestaurantsDto.longitude &&
      !getRestaurantsDto.address
    ) {
      gnaviUrl = `${gnaviUrl}&latitude=${getRestaurantsDto.latitude}`;
      gnaviUrl = `${gnaviUrl}&longitude=${getRestaurantsDto.longitude}`;
    } else if (
      !getRestaurantsDto.latitude &&
      !getRestaurantsDto.longitude &&
      !!getRestaurantsDto.address
    ) {
      let geocodingUrl = `${this.configService.get('HTTP_URL_GEOCODING')}`;
      geocodingUrl = `${geocodingUrl}?address=${encodeURIComponent(
        getRestaurantsDto.address
      )}`;

      try {
        const msg = await this.httpClientService.get(geocodingUrl);
        const latitude = msg.data.data.results[0].geometry.location.lat;
        const longitude = msg.data.data.results[0].geometry.location.lng;
        gnaviUrl = `${gnaviUrl}&latitude=${latitude}`;
        gnaviUrl = `${gnaviUrl}&longitude=${longitude}`;
      } catch (error) {
        throw new NotFoundException(error.message);
      }
    } else {
      throw new BadRequestException(`"Request failed with status code 400`);
    }

    getRestaurantsDto.range
      ? (gnaviUrl = `${gnaviUrl}&range=${getRestaurantsDto.range}`)
      : (gnaviUrl = `${gnaviUrl}&range=${this.DEFAULT_RANGE}`);

    getRestaurantsDto.hit_per_page
      ? (gnaviUrl = `${gnaviUrl}&hit_per_page=${getRestaurantsDto.hit_per_page}`)
      : (gnaviUrl = `${gnaviUrl}&hit_per_page=${this.DEFAULT_HIT_PER_PAGE}`);

    getRestaurantsDto.offset_page
      ? (gnaviUrl = `${gnaviUrl}&offset_page=${getRestaurantsDto.offset_page}`)
      : (gnaviUrl = `${gnaviUrl}&offset_page=${this.DEFAULT_OFFSET_PAGE}`);

    try {
      const msg = await this.httpClientService.get(gnaviUrl);
      return msg.data;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
