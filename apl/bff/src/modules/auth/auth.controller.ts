import { Controller, Request, Post, Get, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthService } from './auth.service';
import { LoginInDto } from './dto/login-in.dto';
import { LoginOutDto } from './dto/login-out.dto';
import { ProfileInDto } from './dto/profile-in.dto';
import { ProfileOutDto } from './dto/profile-out.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req): Promise<LoginOutDto> {
    const loginInDto = req.user as LoginInDto;
    return this.authService.login(loginInDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Request() req): Promise<ProfileOutDto> {
    const profileInDto = req.user as ProfileInDto;
    return this.authService.profile(profileInDto);
  }
}
