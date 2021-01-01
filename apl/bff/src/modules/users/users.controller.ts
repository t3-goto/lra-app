import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import {
  CreateUserInDto,
  CreateUserOutDto,
  GetUsersOutDto,
  GetUserInDto,
  GetUserOutDto,
  DeleteUserInDto,
  DeleteUserOutDto,
} from './dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiCreatedResponse({ description: 'OK.', type: CreateUserOutDto })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  @Post()
  public async create(
    @Body() createUserInDto: CreateUserInDto
  ): Promise<CreateUserOutDto> {
    return this.usersService.create(createUserInDto);
  }

  @ApiOkResponse({ description: 'OK.', type: GetUsersOutDto })
  @Get()
  public async findAll(): Promise<GetUsersOutDto> {
    return this.usersService.findAll();
  }

  @ApiOkResponse({ description: 'OK.', type: GetUserOutDto })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  @Get(':userId')
  public async findOne(
    @Param() getUserInDto: GetUserInDto
  ): Promise<GetUserOutDto> {
    return this.usersService.findOne(getUserInDto);
  }

  @ApiOkResponse({ description: 'OK.', type: DeleteUserOutDto })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  @Delete(':userId')
  public async delete(
    @Param() deleteUserInDto: DeleteUserInDto
  ): Promise<DeleteUserOutDto> {
    return this.usersService.delete(deleteUserInDto);
  }
}
