import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetGeocodingInDto {
  @ApiProperty({
    description: 'Address you want to search.',
  })
  @IsString()
  address: string;

  constructor(address: string) {
    this.address = address;
  }
}
