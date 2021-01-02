import { Module } from '@nestjs/common';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SharedModule } from 'src/shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { ConfigService } from '../../core/config/config.service';

@Module({
  imports: [
    SharedModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [CoreModule],
      useFactory: async (configService: ConfigService) =>
        configService.jwtModuleOptions,
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
