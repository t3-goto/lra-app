import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInDto } from './dto/create-user-in.dto';
import { CreateUserOutDto } from './dto/create-user-out.dto';
import { GetUsersOutDto } from './dto/get-users-out.dto';
import { GetUserOutDto } from './dto/get-user-out.dto';
import { DeleteUserOutDto } from './dto/delete-user-out.dto';
import { User, UserEntity } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<User>
  ) {}

  async create(createUserInDto: CreateUserInDto): Promise<CreateUserOutDto> {
    const user = new User();
    user.username = createUserInDto.username;
    user.password = createUserInDto.password;
    if (
      await this.usersRepository.findOne({ username: createUserInDto.username })
    ) {
      throw new BadRequestException(`This name is already registered.`);
    }
    const registerdUser = await this.usersRepository.save(user);
    const createUserOutDto = registerdUser;
    return createUserOutDto;
  }

  async findAll(): Promise<GetUsersOutDto> {
    const userList = await this.usersRepository.find();
    const getUsersOutDto = new GetUsersOutDto();
    getUsersOutDto.users = userList;
    return getUsersOutDto;
  }

  async findOne(userId: string): Promise<GetUserOutDto> {
    const user = await this.usersRepository.findOne(userId);
    const getUserOutDto = user;
    return getUserOutDto;
  }

  async remove(userId: string): Promise<DeleteUserOutDto> {
    const user = await this.usersRepository.findOne(userId);
    if (!user) {
      throw new BadRequestException(`This name does not exist.`);
    }
    await this.usersRepository.delete(userId);
    const deleteUserOutDto = user;
    return deleteUserOutDto;
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ username: username });
  }
}
