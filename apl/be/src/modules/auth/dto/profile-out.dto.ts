import { ApiProperty } from '@nestjs/swagger';

export class ProfileOutDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  username: string;

  constructor(userId: number, username: string) {
    this.userId = userId;
    this.username = username;
  }
}
