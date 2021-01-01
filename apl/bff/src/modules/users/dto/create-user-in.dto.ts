import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserInDto {
  @ApiProperty({ description: 'Username you want to register.' })
  @IsString()
  username: string;

  @ApiProperty({
    description: 'Password you want to register.',
    minLength: 4,
    maxLength: 20,
  })
  @IsString()
  @Length(4, 20)
  password: string;
}
