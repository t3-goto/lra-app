import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserInDto } from './dto/create-user-in.dto';
import { CreateUserOutDto } from './dto/create-user-out.dto';
import { GetUsersOutDto } from './dto/get-users-out.dto';
import { GetUserOutDto } from './dto/get-user-out.dto';
import { DeleteUserOutDto } from './dto/delete-user-out.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body() createUserInDto: CreateUserInDto
  ): Promise<CreateUserOutDto> {
    return this.usersService.create(createUserInDto);
  }

  @Get()
  async findAll(): Promise<GetUsersOutDto> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') userId: string): Promise<GetUserOutDto> {
    return this.usersService.findOne(userId);
  }

  @Delete(':id')
  async remove(@Param('id') userId: string): Promise<DeleteUserOutDto> {
    return this.usersService.remove(userId);
  }
}
