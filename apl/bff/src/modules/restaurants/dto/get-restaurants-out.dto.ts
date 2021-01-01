import { ApiProperty } from '@nestjs/swagger';

export class GetRestaurantsOutDto {
  @ApiProperty()
  isNext: boolean;

  @ApiProperty()
  totalHitCount: number;

  @ApiProperty()
  startItemNo: number;

  @ApiProperty()
  lastItemNo: number;

  @ApiProperty()
  restaurants: Array<Restaurant>;
}

export class Restaurant {
  order: number;
  id: string;
  updateAt: string;
  name: string;
  nameKana: string;
  latitude: number;
  longitude: number;
  category: string;
  url: string;
  urlMobile: string;
  shopImage1: string;
  shopImage2: string;
  address: string;
  tel: string;
  telSub: string;
  fax: string;
  opentime: string;
  holiday: string;
  line: string;
  station: string;
  stationExit: string;
  walk: string;
  note: string;
  parkingLots: string;
  prShort: string;
  prLong: string;
  budget: number;
  party: number;
  lunch: number;
  creditCard: string;
  eMoney: string;
}
