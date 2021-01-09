import { ApiProperty } from '@nestjs/swagger';
import { Restaurant } from './restaurant';

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

  constructor(
    isNext: boolean,
    totalHitCount: number,
    startItemNo: number,
    lastItemNo: number,
    restaurants: Restaurant[]
  ) {
    this.isNext = isNext;
    this.totalHitCount = totalHitCount;
    this.startItemNo = startItemNo;
    this.lastItemNo = lastItemNo;
    this.restaurants = restaurants;
  }

  public static create(properties: GetRestaurantsOutDto): GetRestaurantsOutDto {
    return new GetRestaurantsOutDto(
      properties.isNext,
      properties.totalHitCount,
      properties.startItemNo,
      properties.lastItemNo,
      properties.restaurants
    );
  }
}
