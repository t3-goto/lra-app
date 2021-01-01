import { ApiProperty } from '@nestjs/swagger';

export class DeleteUserInDto {
  @ApiProperty({ description: 'UserId you want to delete.' })
  userId: number;
}
