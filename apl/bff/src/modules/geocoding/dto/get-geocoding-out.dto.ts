import { ApiProperty } from '@nestjs/swagger';

export class GetGeocodingOutDto {
  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;
}
