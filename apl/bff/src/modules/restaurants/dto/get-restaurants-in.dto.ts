import {
  IsOptional,
  IsLongitude,
  IsLatitude,
  IsIn,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetRestaurantsInDto {
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
  @IsIn(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
  @IsOptional()
  pageOffset: number;

  @ApiProperty()
  @IsOptional()
  hitPerPage: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  address: string;
}
