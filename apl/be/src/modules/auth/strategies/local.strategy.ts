import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './../auth.service';
import { ValidateUserInDto, ValidateUserOutDto } from '../dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  public async validate(
    username: string,
    password: string
  ): Promise<ValidateUserOutDto> {
    const validateUserInDto = new ValidateUserInDto(username, password);
    const validateUserOutDto = await this.authService.validateUser(
      validateUserInDto
    );
    if (!validateUserOutDto) {
      throw new UnauthorizedException();
    }
    return validateUserOutDto;
  }
}
