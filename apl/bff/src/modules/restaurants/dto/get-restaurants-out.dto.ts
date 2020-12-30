export class GetRestaurantsOutDto {
  isNext: boolean;
  totalHitCount: number;
  startItemNo: number;
  lastItemNo: number;
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
