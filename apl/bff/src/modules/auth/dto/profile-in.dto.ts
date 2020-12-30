import { ApiProperty } from '@nestjs/swagger';

export class ProfileInDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  username: string;
}
