import { ApiProperty } from '@nestjs/swagger';
export class LoginOutDto {
  @ApiProperty()
  accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }
}
