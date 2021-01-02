import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserEntity } from './user.entity';
import {
  CreateUserInDto,
  CreateUserOutDto,
  GetUsersOutDto,
  GetUserInDto,
  GetUserOutDto,
  GetUserByUsernameInDto,
  GetUserByUsernameOutDto,
  DeleteUserInDto,
  DeleteUserOutDto,
} from './dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<User>
  ) {}

  public async create(
    createUserInDto: CreateUserInDto
  ): Promise<CreateUserOutDto> {
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

  public async findAll(): Promise<GetUsersOutDto> {
    const userList = await this.usersRepository.find();
    const getUsersOutDto = new GetUsersOutDto();
    getUsersOutDto.users = userList;
    return getUsersOutDto;
  }

  public async findOne(getUserInDto: GetUserInDto): Promise<GetUserOutDto> {
    const user = await this.usersRepository.findOne(getUserInDto.userId);
    const getUserOutDto = user;
    return getUserOutDto;
  }

  public async findOneByUsername(
    getUserByUsernameInDto: GetUserByUsernameInDto
  ): Promise<GetUserByUsernameOutDto> {
    const user = await this.usersRepository.findOne({
      username: getUserByUsernameInDto.username,
    });
    const getUserOutDto = user;
    return getUserOutDto;
  }

  public async delete(
    deleteUserInDto: DeleteUserInDto
  ): Promise<DeleteUserOutDto> {
    const user = await this.usersRepository.findOne(deleteUserInDto.userId);
    if (!user) {
      throw new BadRequestException(`This user does not exist.`);
    }
    await this.usersRepository.delete(deleteUserInDto.userId);
    const deleteUserOutDto = user;
    return deleteUserOutDto;
  }
}
