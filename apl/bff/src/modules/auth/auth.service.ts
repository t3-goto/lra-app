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

  public async validateUser(
    validateUserInDto: ValidateUserInDto
  ): Promise<ValidateUserOutDto> {
    let user: GetUserByUsernameResponse;
    const username = validateUserInDto.username;
    const getUserByUsernameRequest = GetUserByUsernameRequest.create({
      username,
    });
    try {
      const grpcResponse = await this.grpcClientService.getUserByUsername(
        getUserByUsernameRequest
      );
      user = grpcResponse;
    } catch (error) {
      return null;
    }

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
    let user: GetUserByUsernameResponse;
    const username = validateJwtInDto.payload.username;
    const getUserByUsernameRequest = GetUserByUsernameRequest.create({
      username,
    });
    try {
      const grpcResponse = await this.grpcClientService.getUserByUsername(
        getUserByUsernameRequest
      );
      user = grpcResponse;
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
