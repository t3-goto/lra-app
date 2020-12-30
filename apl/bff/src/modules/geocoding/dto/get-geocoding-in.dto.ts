import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetGeocodingInDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  address: string;
}
