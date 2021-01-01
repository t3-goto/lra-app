import { ApiProperty } from '@nestjs/swagger';

export class LoginInDto {
  @ApiProperty({
    description: 'Username you want to login.',
  })
  username: string;

  @ApiProperty({
    description: 'Password you want to login.',
  })
  password: string;
}
