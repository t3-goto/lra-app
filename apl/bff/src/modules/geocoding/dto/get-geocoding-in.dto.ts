import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetGeocodingInDto {
  @ApiProperty()
  @IsString()
  address: string;
}
