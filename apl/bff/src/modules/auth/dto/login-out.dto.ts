import { ApiProperty } from '@nestjs/swagger';

export class LoginOutDto {
  @ApiProperty()
  access_token: string;
}
