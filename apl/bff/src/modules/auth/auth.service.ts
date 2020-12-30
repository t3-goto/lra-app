import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UtilService } from '../../common/util/util.service';
import { ValidateUserInDto } from './dto/validate-user-in.dto';
import { ValidateUserOutDto } from './dto/validate-user-out.dto';
import { LoginInDto } from './dto/login-in.dto';
import { LoginOutDto } from './dto/login-out.dto';
import { ProfileInDto } from './dto/profile-in.dto';
import { ProfileOutDto } from './dto/profile-out.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(
    validateUserInDto: ValidateUserInDto
  ): Promise<ValidateUserOutDto> {
    const user = await this.usersService.findByUsername(
      validateUserInDto.username
    );
    if (
      user &&
      UtilService.validateHash(validateUserInDto.password, user.password)
    ) {
      const { password, ...result } = user;
      return result as ValidateUserOutDto;
    }
    return null;
  }

  async login(loginInDto: LoginInDto): Promise<LoginOutDto> {
    const payload = {
      username: loginInDto.username,
      sub: loginInDto.userId,
    };
    const loginOutDto = new LoginOutDto();
    loginOutDto.access_token = this.jwtService.sign(payload);
    return loginOutDto;
  }

  async profile(profileInDto: ProfileInDto): Promise<ProfileOutDto> {
    const profileOutDto = profileInDto as ProfileOutDto;
    return profileOutDto;
  }
}
