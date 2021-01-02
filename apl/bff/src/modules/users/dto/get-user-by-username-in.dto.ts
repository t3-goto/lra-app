import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetUserByUsernameInDto {
  @ApiProperty({ description: 'Username you want to find.' })
  @IsString()
  username: string;

  constructor(username: string) {
    this.username = username;
  }
}
