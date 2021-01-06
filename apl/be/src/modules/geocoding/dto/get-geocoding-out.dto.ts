import { ApiProperty } from '@nestjs/swagger';

export class GetGeocodingOutDto {
  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
  public static create(properties: GetGeocodingOutDto): GetGeocodingOutDto {
    return new GetGeocodingOutDto(properties.latitude, properties.longitude);
  }
}
