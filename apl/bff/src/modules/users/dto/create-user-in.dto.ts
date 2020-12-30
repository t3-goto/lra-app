import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserInDto {
  @ApiProperty()
  @IsString()
  username: string;

  @IsString()
  @ApiProperty()
  @Length(4, 20)
  password: string;
}
