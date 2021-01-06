import { NotFoundException, Injectable } from '@nestjs/common';
import { User } from './user.entity';
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
import { GrpcClientService } from 'src/shared/grpc-client/grpc-client.service';
import PostUserRequest = rpc.PostUserRequest;
import GetUsersRequest = rpc.GetUsersRequest;
import GetUserRequest = rpc.GetUserRequest;
import DeleteUserRequest = rpc.DeleteUserRequest;

@Injectable()
export class UsersService {
  constructor(private readonly grpcClientService: GrpcClientService) {}

  /**
   * REST: POST /users
   */
  public async create(inDto: CreateUserInDto): Promise<CreateUserOutDto> {
    const user = new User();
    user.username = inDto.username;
    user.password = inDto.password;
    const request = PostUserRequest.create({ ...inDto });
    try {
      const response = await this.grpcClientService.postUser(request);
      return CreateUserOutDto.create({ ...response });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * REST: GET /users
   */
  public async findAll(): Promise<GetUsersOutDto> {
    const request = GetUsersRequest.create();
    try {
      const response = await this.grpcClientService.getUsers(request);
      const { users } = response;
      return GetUsersOutDto.create(users as User[]);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * REST: GET /users/userId
   */
  public async findOne(inDto: GetUserInDto): Promise<GetUserOutDto> {
    const request = GetUserRequest.create({ ...inDto });
    try {
      const response = await this.grpcClientService.getUser(request);
      return GetUserOutDto.create({ ...response });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  /**
   * REST: DELETE /users/userId
   */
  public async delete(inDto: DeleteUserInDto): Promise<DeleteUserOutDto> {
    const request = DeleteUserRequest.create({ ...inDto });
    try {
      const response = await this.grpcClientService.deleteUser(request);
      return DeleteUserOutDto.create({ ...response });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
