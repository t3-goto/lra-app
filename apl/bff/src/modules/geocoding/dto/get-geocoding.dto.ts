import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetGeocodingDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  address: string;
}
