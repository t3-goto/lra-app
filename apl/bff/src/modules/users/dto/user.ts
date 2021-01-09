import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;

  constructor(
    userId: number,
    username: string,
    password: string,
    isActive: boolean,
    createdAt: string,
    updatedAt: string
  ) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
