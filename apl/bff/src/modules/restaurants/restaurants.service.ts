import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { GetRestaurantsInDto } from './dto/get-restaurants-in.dto';
import { GetRestaurantsOutDto } from './dto/get-restaurants-out.dto';
import { Restaurant } from './dto/get-restaurants-out.dto';
import { ConfigService } from './../../core/config/config.service';
import { HttpClientService } from 'src/shared/http-client/http-client.service';
import { GnaviRestSearchApiResponseSchema } from '../../interfaces/gnavi-rest-search-api-response-schema';
import { GetGeocodingApiResponseSchema } from '../../interfaces/get-geocoding-api-response-schema';
@Injectable()
export class RestaurantsService {
  private DEFAULT_RANGE = 3;
  private DEFAULT_HIT_PER_PAGE = 100;
  private DEFAULT_OFFSET_PAGE = 1;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpClientService: HttpClientService
  ) {}

  async findByKeys(
    getRestaurantsInDto: GetRestaurantsInDto
  ): Promise<GetRestaurantsOutDto> {
    let gnaviUrl = `${this.configService.get(
      'HTTP_URL_GNAVI'
    )}?keyid=${this.configService.get('ACCESS_KEY_GNAVI')}`;

    if (
      !!getRestaurantsInDto.latitude &&
      !!getRestaurantsInDto.longitude &&
      !getRestaurantsInDto.address
    ) {
      gnaviUrl = `${gnaviUrl}&latitude=${getRestaurantsInDto.latitude}`;
      gnaviUrl = `${gnaviUrl}&longitude=${getRestaurantsInDto.longitude}`;
    } else if (
      !getRestaurantsInDto.latitude &&
      !getRestaurantsInDto.longitude &&
      !!getRestaurantsInDto.address
    ) {
      let geocodingUrl = `${this.configService.get('HTTP_URL_GEOCODING')}`;
      geocodingUrl = `${geocodingUrl}?address=${encodeURIComponent(
        getRestaurantsInDto.address
      )}`;

      try {
        const msg = await this.httpClientService.get<GetGeocodingApiResponseSchema>(
          geocodingUrl
        );
        const latitude = msg.data.latitude;
        const longitude = msg.data.longitude;
        gnaviUrl = `${gnaviUrl}&latitude=${latitude}`;
        gnaviUrl = `${gnaviUrl}&longitude=${longitude}`;
      } catch (error) {
        throw new NotFoundException(error.message);
      }
    } else {
      throw new BadRequestException(`"Request failed with status code 400`);
    }

    getRestaurantsInDto.range
      ? (gnaviUrl = `${gnaviUrl}&range=${getRestaurantsInDto.range}`)
      : (gnaviUrl = `${gnaviUrl}&range=${this.DEFAULT_RANGE}`);

    getRestaurantsInDto.hit_per_page
      ? (gnaviUrl = `${gnaviUrl}&hit_per_page=${getRestaurantsInDto.hit_per_page}`)
      : (gnaviUrl = `${gnaviUrl}&hit_per_page=${this.DEFAULT_HIT_PER_PAGE}`);

    getRestaurantsInDto.offset_page
      ? (gnaviUrl = `${gnaviUrl}&offset_page=${getRestaurantsInDto.offset_page}`)
      : (gnaviUrl = `${gnaviUrl}&offset_page=${this.DEFAULT_OFFSET_PAGE}`);

    try {
      const httpResponse = await this.httpClientService.get<GnaviRestSearchApiResponseSchema>(
        gnaviUrl
      );
      const totalHitCount = httpResponse.data.total_hit_count;
      const hitPerPage = httpResponse.data.hit_per_page;
      const pageOffset = httpResponse.data.page_offset;
      const startItemNo = hitPerPage * (pageOffset - 1) + 1;
      const lastItemNo = hitPerPage * pageOffset;
      const isNext = totalHitCount >= lastItemNo;
      const getRestaurantsOutDto = new GetRestaurantsOutDto();
      getRestaurantsOutDto.isNext = isNext;
      getRestaurantsOutDto.totalHitCount = totalHitCount;
      getRestaurantsOutDto.startItemNo = startItemNo;
      getRestaurantsOutDto.lastItemNo = lastItemNo;
      getRestaurantsOutDto.restaurants = httpResponse.data.rest.map(
        (restItem) => {
          const restaurant = new Restaurant();
          restaurant.order = restItem['@attributes'].order;
          restaurant.id = restItem.id;
          restaurant.updateAt = restItem.update_date;
          restaurant.name = restItem.name;
          restaurant.nameKana = restItem.name_kana;
          restaurant.latitude = parseFloat(restItem.latitude);
          restaurant.longitude = parseFloat(restItem.longitude);
          restaurant.category = restItem.category;
          restaurant.url = restItem.url;
          restaurant.urlMobile = restItem.url_mobile;
          restaurant.shopImage1 = restItem.image_url.shop_image1;
          restaurant.shopImage2 = restItem.image_url.shop_image2;
          restaurant.address = restItem.address;
          restaurant.tel = restItem.tel;
          restaurant.telSub = restItem.tel_sub;
          restaurant.fax = restItem.fax;
          restaurant.opentime = restItem.opentime;
          restaurant.holiday = restItem.holiday;
          restaurant.line = restItem.access.line;
          restaurant.station = restItem.access.station;
          restaurant.stationExit = restItem.access.station_exit;
          restaurant.walk = restItem.access.walk;
          restaurant.note = restItem.access.note;
          restaurant.parkingLots = restItem.parking_lots;
          restaurant.prShort = restItem.pr.pr_short;
          restaurant.prLong = restItem.pr.pr_long;
          restaurant.budget = restItem.budget;
          restaurant.party = restItem.party;
          restaurant.lunch = restItem.lunch;
          restaurant.creditCard = restItem.credit_card;
          restaurant.eMoney = restItem.e_money;
          return restaurant;
        }
      );
      return getRestaurantsOutDto;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
