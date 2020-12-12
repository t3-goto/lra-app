import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { ConfigService } from './../../core/config/config.service';
import { RedisCacheService } from './../../shared/redis-cache/redis-cache.service';
import { HttpClientService } from 'src/shared/http-client/http-client.service';
import { CustomLogger } from 'src/shared/custom-logger/custom-logger.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
    private readonly redisCacheService: RedisCacheService,
    private readonly httpClientService: HttpClientService,
    private readonly customLogger: CustomLogger
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    this.customLogger.info(JSON.stringify(createUserDto));
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  // findOne(@Param('id') id: string): Promise<User> {
  async findOne(@Param('id') id: string): Promise<string> {
    // return this.usersService.findOne(id);
    await this.redisCacheService.set('keykey', 'keykeykey');
    const msg1 = await this.redisCacheService.get('keykey');
    console.log(msg1);
    const msg2 = await this.httpClientService.get(
      this.configService.get('HTTP_URL_TEST')
    );
    this.customLogger.info('log dayo');
    console.log(msg2.data);

    return msg2.data;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
