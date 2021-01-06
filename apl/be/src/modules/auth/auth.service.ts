import { Injectable } from '@nestjs/common';
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
import { GrpcClientService } from 'src/shared/grpc-client/grpc-client.service';
import { rpc } from 'codegen/grpc';
import GetUserByUsernameRequest = rpc.GetUserByUsernameRequest;
import GetUserByUsernameResponse = rpc.GetUserByUsernameResponse;
import { CacheClientService } from '../../shared/cache-client/cache-client.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly grpcClientService: GrpcClientService,
    private readonly cacheClientService: CacheClientService
  ) {}

  /**
   * Guard: local
   */
  public async validateUser(
    inDto: ValidateUserInDto
  ): Promise<ValidateUserOutDto> {
    let user: GetUserByUsernameResponse;
    const username = inDto.username;
    const request = GetUserByUsernameRequest.create({
      username,
    });
    try {
      const response = await this.grpcClientService.getUserByUsername(request);
      user = response;
    } catch (error) {
      return null;
    }

    if (user && UtilService.validateHash(inDto.password, user.password)) {
      const { password, ...result } = user;
      return result as ValidateUserOutDto;
    }
    return null;
  }

  /**
   * Guard: jwt
   */
  public async validateJwt(
    inDto: ValidateJwtInDto
  ): Promise<ValidateJwtOutDto> {
    let user: GetUserByUsernameResponse;
    const username = inDto.payload.username;
    const request = GetUserByUsernameRequest.create({
      username,
    });
    try {
      const response = await this.grpcClientService.getUserByUsername(request);
      user = response;
    } catch (error) {
      return null;
    }

    if (user) {
      const { userId, username, ..._ } = user;
      const validateJwtOutDto = new ValidateJwtOutDto(userId, username);
      return validateJwtOutDto;
    }
    return null;
  }

  /**
   * REST: POST /auth/login
   */
  public async getToken(inDto: GetTokenInDto): Promise<GetTokenOutDto> {
    const payload = {
      username: inDto.username,
      sub: inDto.userId,
    };
    return new GetTokenOutDto(this.jwtService.sign(payload));
  }

  /**
   * REST: POST /auth/profile
   */
  public async getProfile(inDto: GetProfileInDto): Promise<GetProfileOutDto> {
    const outDto = inDto as GetProfileOutDto;
    return outDto;
  }
}
