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

  /**
   * gRPC: UsersService.PostUser
   */
  @UseInterceptors(GrpcAccessLoggerInterceptor)
  @GrpcMethod('UsersService', 'PostUser')
  public async postUser(
    request: PostUserRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>
  ): Promise<PostUserResponse> {
    return await this.usersService.postUser(request);
  }

  /**
   * gRPC: UsersService.GetUsers
   */
  @UseInterceptors(GrpcAccessLoggerInterceptor)
  @GrpcMethod('UsersService', 'GetUsers')
  public async getUsers(
    request: GetUsersRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>
  ): Promise<GetUsersResponse> {
    return await this.usersService.getUsers(request);
  }

  /**
   * gRPC: UsersService.GetUser
   */
  @UseInterceptors(GrpcAccessLoggerInterceptor)
  @GrpcMethod('UsersService', 'GetUser')
  public async getUser(
    request: GetUserRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>
  ): Promise<GetUserResponse> {
    return await this.usersService.getUser(request);
  }

  /**
   * gRPC: UsersService.GetUserByUsername
   */
  @UseInterceptors(GrpcAccessLoggerInterceptor)
  @GrpcMethod('UsersService', 'GetUserByUsername')
  public async getUserByUsername(
    request: GetUserByUsernameRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>
  ): Promise<GetUserByUsernameResponse> {
    return await this.usersService.getUserByUsername(request);
  }

  /**
   * gRPC: UsersService.DeleteUser
   */
  @UseInterceptors(GrpcAccessLoggerInterceptor)
  @GrpcMethod('UsersService', 'DeleteUser')
  public async deleteUser(
    request: DeleteUserRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>
  ): Promise<DeleteUserResponse> {
    return await this.usersService.deleteUser(request);
  }
}
