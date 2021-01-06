import { Injectable, NotFoundException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { ConfigService } from './../../core/config/config.service';
import { HttpClientService } from 'src/shared/http-client/http-client.service';
import { GetRestaurantsInDto, GetRestaurantsOutDto, Restaurant } from './dto';
import { GnaviRestSearchApiRequestSchema } from '../../interfaces/gnavi-rest-search-api-request-schema';
import { GnaviRestSearchApiResponseSchema } from '../../interfaces/gnavi-rest-search-api-response-schema';
import {
  DEFAULT_RANGE,
  DEFAULT_HIT_PER_PAGE,
  DEFAULT_OFFSET_PAGE,
  FIND_BY_LATLNG,
  FIND_BY_ADDRESS,
  BAD_REQUEST,
  FindMode,
} from './constants';
import { GrpcClientService } from 'src/shared/grpc-client/grpc-client.service';
import { rpc } from 'codegen/grpc';
import GetGeocodingRequest = rpc.GetGeocodingRequest;
import GetRestaurantsRequest = rpc.GetRestaurantsRequest;
import GetRestaurantsResponse = rpc.GetRestaurantsResponse;

@Injectable()
export class RestaurantsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpClientService: HttpClientService,
    private readonly grpcClientService: GrpcClientService
  ) {}

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
      // const {
      //   isNext,
      //   totalHitCount,
      //   startItemNo,
      //   lastItemNo,
      //   restaurants,
      // } = response;
      // return new GetRestaurantsOutDto(
      //   isNext,
      //   totalHitCount,
      //   startItemNo,
      //   lastItemNo,
      //   restaurants as Restaurant[]
      // );
      const restaurants = response.restaurants as Restaurant[];
      return GetRestaurantsOutDto.create({
        ...response,
        restaurants,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * gRPC: RestaurantsService.GetRestaurants
   */
  public async getRestaurants(
    request: GetRestaurantsRequest
  ): Promise<GetRestaurantsResponse> {
    let latitude, longitude: number;
    switch (this.getFindMode(request)) {
      case FIND_BY_LATLNG: {
        latitude = request.latitude;
        longitude = request.longitude;
        break;
      }
      case FIND_BY_ADDRESS: {
        const retObj = await this.getLatLngByAddress(request.address);
        latitude = retObj.latitude;
        longitude = retObj.longitude;
        break;
      }
      default: {
        throw new RpcException('Request failed.');
      }
    }
    const gnaviUrl = this.configService.get('HTTP_URL_GNAVI');
    const keyid = this.configService.get('ACCESS_KEY_GNAVI');
    const range = request.range ? request.range : DEFAULT_RANGE;
    const hit_per_page = request.hitPerPage
      ? request.hitPerPage
      : DEFAULT_HIT_PER_PAGE;
    const offset_page = request.pageOffset
      ? request.pageOffset
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
      return this.createGetRestaurantsResponse(httpResponse);
    } catch (error) {
      throw new RpcException(error.message);
    }
  }

  /**
   * Private Method: To get find mode.
   */
  private getFindMode(request: GetRestaurantsRequest): FindMode {
    if (!!request.latitude && !!request.longitude && !request.address) {
      return FIND_BY_LATLNG;
    } else if (!request.latitude && !request.longitude && !!request.address) {
      return FIND_BY_ADDRESS;
    } else {
      return BAD_REQUEST;
    }
  }

  /**
   * Private Method: To get latitude and longitude by address.
   */
  private async getLatLngByAddress(
    address: string
  ): Promise<{ latitude: number; longitude: number }> {
    const request = GetGeocodingRequest.create({ address });
    try {
      const response = await this.grpcClientService.getGeocoding(request);
      const { latitude, longitude } = response;
      return { latitude, longitude };
    } catch (error) {
      throw new RpcException(error.message);
    }
  }

  private createGetRestaurantsResponse(
    httpResponse: GnaviRestSearchApiResponseSchema
  ): GetRestaurantsResponse {
    const totalHitCount = httpResponse.total_hit_count;
    const hitPerPage = httpResponse.hit_per_page;
    const pageOffset = httpResponse.page_offset;
    const startItemNo = hitPerPage * (pageOffset - 1) + 1;
    const lastItemNo = hitPerPage * pageOffset;
    const isNext = totalHitCount >= lastItemNo;
    // const response = new GetRestaurantsResponse();
    // response.isNext = isNext;
    // response.totalHitCount = totalHitCount;
    // response.startItemNo = startItemNo;
    // response.lastItemNo = lastItemNo;
    // response.restaurants = httpResponse.rest.map((restItem) => {
    const restaurants = httpResponse.rest.map((restItem) => {
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
    // return response;
    return GetRestaurantsResponse.create({
      isNext,
      totalHitCount,
      startItemNo,
      lastItemNo,
      restaurants,
    });
  }
}
