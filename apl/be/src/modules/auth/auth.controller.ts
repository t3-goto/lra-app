import {
  Controller,
  Request,
  Post,
  Get,
  UseGuards,
  Body,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard, JwtAuthGuard } from './guards';
import {
  ValidateUserOutDto,
  ValidateJwtOutDto,
  LoginInDto,
  LoginOutDto,
  ProfileOutDto,
  GetTokenInDto,
  GetProfileInDto,
} from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * REST: POST /auth/login
   */
  @ApiCreatedResponse({ description: 'Created.', type: LoginOutDto })
  @ApiUnauthorizedResponse({ description: 'Uauthorized.' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Body() inDto: LoginInDto): Promise<LoginOutDto> {
    const validateUserOutDto = req.user as ValidateUserOutDto;
    const getTokenInDto = validateUserOutDto as GetTokenInDto;
    const getTokenOutDto = await this.authService.getToken(getTokenInDto);
    return new LoginOutDto(getTokenOutDto.accessToken);
  }

  /**
   * REST: POST /auth/profile
   */
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'OK.', type: ProfileOutDto })
  @ApiUnauthorizedResponse({ description: 'Uauthorized.' })
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Request() req): Promise<ProfileOutDto> {
    const validateJwtOutDto = req.user as ValidateJwtOutDto;
    const getProfileInDto = validateJwtOutDto as GetProfileInDto;
    const getProfileOutDto = await this.authService.getProfile(getProfileInDto);
    return new ProfileOutDto(
      getProfileOutDto.userId,
      getProfileOutDto.username
    );
  }
}
