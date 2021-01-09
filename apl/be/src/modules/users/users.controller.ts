import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';
import { UsersService } from './users.service';
import {
  PostUserRequest,
  PostUserResponse,
  GetUsersRequest,
  GetUsersResponse,
  GetUserRequest,
  GetUserResponse,
  GetUserByUsernameRequest,
  GetUserByUsernameResponse,
  DeleteUserRequest,
  DeleteUserResponse,
} from './interfaces';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * gRPC: UsersService.PostUser
   */
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
  @GrpcMethod('UsersService', 'DeleteUser')
  public async deleteUser(
    request: DeleteUserRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>
  ): Promise<DeleteUserResponse> {
    return await this.usersService.deleteUser(request);
  }
}
