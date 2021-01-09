import { ApiProperty } from '@nestjs/swagger';

export class Restaurant {
  @ApiProperty()
  order: number;

  @ApiProperty()
  id: string;

  @ApiProperty()
  updateAt: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  nameKana: string;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  @ApiProperty()
  category: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  urlMobile: string;

  @ApiProperty()
  shopImage1: string;

  @ApiProperty()
  shopImage2: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  tel: string;

  @ApiProperty()
  telSub: string;

  @ApiProperty()
  fax: string;

  @ApiProperty()
  opentime: string;

  @ApiProperty()
  holiday: string;

  @ApiProperty()
  line: string;

  @ApiProperty()
  station: string;

  @ApiProperty()
  stationExit: string;

  @ApiProperty()
  walk: string;

  @ApiProperty()
  note: string;

  @ApiProperty()
  parkingLots: string;

  @ApiProperty()
  prShort: string;

  @ApiProperty()
  prLong: string;

  @ApiProperty()
  budget: number;

  @ApiProperty()
  party: number;

  @ApiProperty()
  lunch: number;

  @ApiProperty()
  creditCard: string;

  @ApiProperty()
  eMoney: string;
}
