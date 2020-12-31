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
import { GnaviRestSearchApiRequestSchema } from '../../interfaces/gnavi-rest-search-api-request-schema';
import { GnaviRestSearchApiResponseSchema } from '../../interfaces/gnavi-rest-search-api-response-schema';
import { GetGeocodingApiRequestSchema } from '../../interfaces/get-geocoding-api-request-schema';
import { GetGeocodingApiResponseSchema } from '../../interfaces/get-geocoding-api-response-schema';
import {
  DEFAULT_RANGE,
  DEFAULT_HIT_PER_PAGE,
  DEFAULT_OFFSET_PAGE,
  FIND_BY_LATLNG,
  FIND_BY_ADDRESS,
  BAD_REQUEST,
  FindMode,
} from './constants';
@Injectable()
export class RestaurantsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpClientService: HttpClientService
  ) {}

  public async findByKeys(
    getRestaurantsInDto: GetRestaurantsInDto
  ): Promise<GetRestaurantsOutDto> {
    let latitude, longitude: number;
    switch (this.getFindMode(getRestaurantsInDto)) {
      case FIND_BY_LATLNG: {
        latitude = getRestaurantsInDto.latitude;
        longitude = getRestaurantsInDto.longitude;
        break;
      }
      case FIND_BY_ADDRESS: {
        const retObj = await this.getLatLngByAddress(
          getRestaurantsInDto.address
        );
        latitude = retObj.latitude;
        longitude = retObj.longitude;
        break;
      }
      default: {
        throw new BadRequestException(`"Request failed with status code 400`);
      }
    }
    const gnaviUrl = this.configService.get('HTTP_URL_GNAVI');
    const keyid = this.configService.get('ACCESS_KEY_GNAVI');
    const range = getRestaurantsInDto.range
      ? getRestaurantsInDto.range
      : DEFAULT_RANGE;
    const hit_per_page = getRestaurantsInDto.hitPerPage
      ? getRestaurantsInDto.hitPerPage
      : DEFAULT_HIT_PER_PAGE;
    const offset_page = getRestaurantsInDto.pageOffset
      ? getRestaurantsInDto.pageOffset
      : DEFAULT_OFFSET_PAGE;
    const gnaviRestSearchApiRequestSchema: GnaviRestSearchApiRequestSchema = {
      keyid,
      latitude,
      longitude,
      range,
      hit_per_page,
      offset_page,
    };
    try {
      const httpResponse = await this.httpClientService.getAllByQuery<
        GnaviRestSearchApiRequestSchema,
        GnaviRestSearchApiResponseSchema
      >(gnaviUrl, gnaviRestSearchApiRequestSchema);
      return this.createGetRestaurantsOutDto(httpResponse);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  private getFindMode(getRestaurantsInDto: GetRestaurantsInDto): FindMode {
    if (
      !!getRestaurantsInDto.latitude &&
      !!getRestaurantsInDto.longitude &&
      !getRestaurantsInDto.address
    ) {
      return FIND_BY_LATLNG;
    } else if (
      !getRestaurantsInDto.latitude &&
      !getRestaurantsInDto.longitude &&
      !!getRestaurantsInDto.address
    ) {
      return FIND_BY_ADDRESS;
    } else {
      return BAD_REQUEST;
    }
  }

  private async getLatLngByAddress(
    address: string
  ): Promise<{ latitude: number; longitude: number }> {
    const geocodingUrl = `${this.configService.get('HTTP_URL_GEOCODING')}`;
    const getGeocodingApiRequestSchema: GetGeocodingApiRequestSchema = {
      address,
    };
    try {
      const httpResponse = await this.httpClientService.getAllByQuery<
        GetGeocodingApiRequestSchema,
        GetGeocodingApiResponseSchema
      >(geocodingUrl, getGeocodingApiRequestSchema);
      const { latitude, longitude } = httpResponse;
      return { latitude, longitude };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  private createGetRestaurantsOutDto(
    httpResponse: GnaviRestSearchApiResponseSchema
  ): GetRestaurantsOutDto {
    const totalHitCount = httpResponse.total_hit_count;
    const hitPerPage = httpResponse.hit_per_page;
    const pageOffset = httpResponse.page_offset;
    const startItemNo = hitPerPage * (pageOffset - 1) + 1;
    const lastItemNo = hitPerPage * pageOffset;
    const isNext = totalHitCount >= lastItemNo;
    const getRestaurantsOutDto = new GetRestaurantsOutDto();
    getRestaurantsOutDto.isNext = isNext;
    getRestaurantsOutDto.totalHitCount = totalHitCount;
    getRestaurantsOutDto.startItemNo = startItemNo;
    getRestaurantsOutDto.lastItemNo = lastItemNo;
    getRestaurantsOutDto.restaurants = httpResponse.rest.map((restItem) => {
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
    });
    return getRestaurantsOutDto;
  }
}
