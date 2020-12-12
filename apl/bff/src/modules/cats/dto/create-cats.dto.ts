import { IsInt, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  age: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  breed: string;
}
