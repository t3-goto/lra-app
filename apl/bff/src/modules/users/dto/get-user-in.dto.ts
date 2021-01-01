import { ApiProperty } from '@nestjs/swagger';

export class GetUserInDto {
  @ApiProperty({ description: 'UserId you want to find.' })
  userId: number;
}
