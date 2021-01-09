import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserEntity } from './user.entity';
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

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<User>
  ) {}

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
