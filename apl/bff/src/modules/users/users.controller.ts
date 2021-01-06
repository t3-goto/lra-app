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

  /**
   * REST: POST /users
   */
  @ApiCreatedResponse({ description: 'OK.', type: CreateUserOutDto })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  @Post()
  public async create(
    @Body() inDto: CreateUserInDto
  ): Promise<CreateUserOutDto> {
    return this.usersService.create(inDto);
  }

  /**
   * REST: GET /users
   */
  @ApiOkResponse({ description: 'OK.', type: GetUsersOutDto })
  @Get()
  public async findAll(): Promise<GetUsersOutDto> {
    return this.usersService.findAll();
  }

  /**
   * REST: GET /users/userId
   */
  @ApiOkResponse({ description: 'OK.', type: GetUserOutDto })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  @Get(':userId')
  public async findOne(@Param() inDto: GetUserInDto): Promise<GetUserOutDto> {
    return this.usersService.findOne(inDto);
  }

  /**
   * REST: DELETE /users/userId
   */
  @ApiOkResponse({ description: 'OK.', type: DeleteUserOutDto })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  @Delete(':userId')
  public async delete(
    @Param() inDto: DeleteUserInDto
  ): Promise<DeleteUserOutDto> {
    return this.usersService.delete(inDto);
  }
}
