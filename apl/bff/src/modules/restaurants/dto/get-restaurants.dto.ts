import { IsOptional, IsLongitude, IsLatitude, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetRestaurantsDto {
  @ApiProperty()
  @IsLatitude()
  @IsOptional()
  latitude: number;

  @ApiProperty()
  @IsLongitude()
  @IsOptional()
  longitude: number;

  @ApiProperty()
  @IsIn(['1', '2', '3', '4', '5'])
  @IsOptional()
  range: number;

  @ApiProperty()
  @IsOptional()
  offset_page: number;

  @ApiProperty()
  @IsOptional()
  hit_per_page: number;
}
