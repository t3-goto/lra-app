import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserSchema } from './user.entity';
import { UtilService } from '../../common/util/util.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserSchema)
    private readonly usersRepository: Repository<User>
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    console.log(createUserDto);
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ username: username });
    // .createQueryBuilder('user')
    // .where('user.username = :username', { username: username })
    // .getOne();
  }
}
