import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UtilService } from '../../common/util/util.service';
import {
  ValidateUserInDto,
  ValidateUserOutDto,
  ValidateJwtInDto,
  ValidateJwtOutDto,
  GetTokenInDto,
  GetTokenOutDto,
  GetProfileInDto,
  GetProfileOutDto,
} from './dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  public async validateUser(
    validateUserInDto: ValidateUserInDto
  ): Promise<ValidateUserOutDto> {
    const user = await this.usersService.findOneByUsername(
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

  public async validateJwt(
    validateJwtInDto: ValidateJwtInDto
  ): Promise<ValidateJwtOutDto> {
    const user = await this.usersService.findOneByUsername(
      validateJwtInDto.payload.username
    );
    if (user) {
      const { userId, username, ..._ } = user;
      const validateJwtOutDto = new ValidateJwtOutDto(userId, username);
      return validateJwtOutDto;
    }
    return null;
  }

  public async getToken(getTokenInDto: GetTokenInDto): Promise<GetTokenOutDto> {
    const payload = {
      username: getTokenInDto.username,
      sub: getTokenInDto.userId,
    };
    return new GetTokenOutDto(this.jwtService.sign(payload));
  }

  public async getProfile(
    getProfileInDto: GetProfileInDto
  ): Promise<GetProfileOutDto> {
    const getProfileOutDto = getProfileInDto as GetProfileOutDto;
    return getProfileOutDto;
  }
}
