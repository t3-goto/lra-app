import { NotFoundException, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserEntity } from './user.entity';
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
import PostUserResponse = rpc.PostUserResponse;
import GetUsersRequest = rpc.GetUsersRequest;
import GetUsersResponse = rpc.GetUsersResponse;
import GetUserRequest = rpc.GetUserRequest;
import GetUserResponse = rpc.GetUserResponse;
import GetUserByUsernameRequest = rpc.GetUserByUsernameRequest;
import GetUserByUsernameResponse = rpc.GetUserByUsernameResponse;
import DeleteUserRequest = rpc.DeleteUserRequest;
import DeleteUserResponse = rpc.DeleteUserResponse;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<User>,
    private readonly grpcClientService: GrpcClientService
  ) {}

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

  /**
   * gRPC: UsersService.PostUser
   */
  public async postUser(request: PostUserRequest): Promise<PostUserResponse> {
    const user = new User();
    user.username = request.username;
    user.password = request.password;
    if (await this.usersRepository.findOne({ username: user.username })) {
      throw new RpcException(`This name is already registered.`);
    }
    const registerdUser = await this.usersRepository.save(user);
    return PostUserResponse.create({ ...registerdUser });
  }

  /**
   * gRPC: UsersService.GetUsers
   */
  public async getUsers(request: GetUsersRequest): Promise<GetUsersResponse> {
    const users = await this.usersRepository.find();
    return GetUsersResponse.create({ users });
  }

  /**
   * gRPC: UsersService.GetUser
   */
  public async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    const user = await this.usersRepository.findOne(request.userId);
    if (!user) {
      throw new RpcException(`This user does not exist.`);
    }
    return GetUserResponse.create({ ...user });
  }

  /**
   * gRPC: UsersService.GetUserByUsername
   */
  public async getUserByUsername(
    request: GetUserByUsernameRequest
  ): Promise<GetUserByUsernameResponse> {
    const user = await this.usersRepository.findOne({
      username: request.username,
    });
    if (!user) {
      throw new RpcException(`This user does not exist.`);
    }
    return GetUserByUsernameResponse.create({ ...user });
  }

  /**
   * gRPC: UsersService.DeleteUser
   */
  public async deleteUser(
    request: DeleteUserRequest
  ): Promise<DeleteUserResponse> {
    const user = await this.usersRepository.findOne(request.userId);
    if (!user) {
      throw new RpcException(`This user does not exist.`);
    }
    await this.usersRepository.delete(request.userId);
    return DeleteUserResponse.create({ ...user });
  }
}
