import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetGeocodingInDto {
  @ApiProperty({
    description: 'Address you want to search.',
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  constructor(address: string) {
    this.address = address;
  }
}
