import {
  IsOptional,
  IsLongitude,
  IsLatitude,
  IsIn,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetRestaurantsInDto {
  @ApiProperty({
    description: 'Latitude of restaurants you want to search.',
    required: false,
  })
  @IsLatitude()
  @IsOptional()
  latitude: number;

  @ApiProperty({
    description: 'Longitude of restaurants you want to search.',
    required: false,
  })
  @IsLongitude()
  @IsOptional()
  longitude: number;

  @ApiProperty({
    description: 'Range of restaurants you want to search.',
    required: false,
  })
  @IsIn(['1', '2', '3', '4', '5'])
  @IsOptional()
  range: number;

  @ApiProperty({
    description: 'Page offset of restaurants you want to search.',
    required: false,
  })
  @IsIn(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
  @IsOptional()
  pageOffset: number;

  @ApiProperty({
    description: 'Hit per page of restaurants you want to search.',
    required: false,
  })
  @IsOptional()
  hitPerPage: number;

  @ApiProperty({
    description: 'Address of restaurants you want to search.',
    required: false,
  })
  @IsOptional()
  @IsString()
  address: string;
}
