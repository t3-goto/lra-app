import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './../auth.service';
import { ConfigService } from 'src/core/config/config.service';
import { ValidateJwtInDto, ValidateJwtOutDto } from '../dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private readonly configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.jwtModuleOptions.secret,
    });
  }

  public async validate(payload: any): Promise<ValidateJwtOutDto> {
    const validateJwtInDto = new ValidateJwtInDto();
    validateJwtInDto.payload = payload;
    const validateJwtOutDto = await this.authService.validateJwt(
      validateJwtInDto
    );
    return validateJwtOutDto;
  }
}
