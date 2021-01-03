import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';
import { GrpcAccessLoggerInterceptor } from '../../interceptors/grpc-access-logger.interceptor';
import { UsersService } from './users.service';
import {
  CreateUserInDto,
  CreateUserOutDto,
  GetUsersOutDto,
  GetUserInDto,
  GetUserOutDto,
  GetUserByUsernameInDto,
  DeleteUserInDto,
  DeleteUserOutDto,
} from './dto';
import { rpc } from 'codegen/grpc';
import PostUserRequest = rpc.PostUserRequest;
import PostUserResponse = rpc.PostUserResponse;
import GetUsersRequest = rpc.GetUsersRequest;
import GetUsersResponse = rpc.GetUsersResponse;
import GetUserRequest = rpc.GetUserRequest;
import GetUserResponse = rpc.GetUserResponse;
import GetUserByUsernameRequest = rpc.GetUserByUsernameRequest;
import GetUserByUsernameResponse = rpc.GetUserByUsernameResponse;
import DeleteUserRequest = rpc.DeleteUserRequest;
import DeleteUserResponse = rpc.DeleteUserResponse;

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

  @UseInterceptors(GrpcAccessLoggerInterceptor)
  @GrpcMethod('UsersService', 'PostUser')
  public async createGrpc(
    request: PostUserRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>
  ): Promise<PostUserResponse> {
    const createUserInDto = request as CreateUserInDto;
    const createUserOutDto = await this.usersService.create(createUserInDto);
    const response = createUserOutDto as PostUserResponse;
    return response;
  }

  @ApiOkResponse({ description: 'OK.', type: GetUsersOutDto })
  @Get()
  public async findAll(): Promise<GetUsersOutDto> {
    return this.usersService.findAll();
  }

  @UseInterceptors(GrpcAccessLoggerInterceptor)
  @GrpcMethod('UsersService', 'GetUsers')
  public async findAllGrpc(
    request: GetUsersRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>
  ): Promise<GetUsersResponse> {
    const getUsersOutDto = await this.usersService.findAll();
    const response = getUsersOutDto as GetUsersResponse;
    return response;
  }

  @ApiOkResponse({ description: 'OK.', type: GetUserOutDto })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  @Get(':userId')
  public async findOne(
    @Param() getUserInDto: GetUserInDto
  ): Promise<GetUserOutDto> {
    return this.usersService.findOne(getUserInDto);
  }

  @UseInterceptors(GrpcAccessLoggerInterceptor)
  @GrpcMethod('UsersService', 'GetUser')
  public async findOneGrpc(
    request: GetUserRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>
  ): Promise<GetUserResponse> {
    const getUserInDto = request as GetUserInDto;
    const getUserOutDto = await this.usersService.findOne(getUserInDto);
    const response = getUserOutDto as GetUserResponse;
    return response;
  }

  @UseInterceptors(GrpcAccessLoggerInterceptor)
  @GrpcMethod('UsersService', 'GetUserByUsername')
  public async findOneByUsernameGrpc(
    request: GetUserByUsernameRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>
  ): Promise<GetUserByUsernameResponse> {
    const getUserByUsernameInDto = request as GetUserByUsernameInDto;
    const getUserByUsernameOutDto = await this.usersService.findOneByUsername(
      getUserByUsernameInDto
    );
    const response = getUserByUsernameOutDto as GetUserByUsernameResponse;
    return response;
  }

  @ApiOkResponse({ description: 'OK.', type: DeleteUserOutDto })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  @Delete(':userId')
  public async delete(
    @Param() deleteUserInDto: DeleteUserInDto
  ): Promise<DeleteUserOutDto> {
    return this.usersService.delete(deleteUserInDto);
  }

  @UseInterceptors(GrpcAccessLoggerInterceptor)
  @GrpcMethod('UsersService', 'DeleteUser')
  public async deleteGrpc(
    request: DeleteUserRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>
  ): Promise<DeleteUserResponse> {
    const deleteUserInDto = request as DeleteUserInDto;
    const deleteUserOutDto = await this.usersService.delete(deleteUserInDto);
    const response = deleteUserOutDto as DeleteUserResponse;
    return response;
  }
}
