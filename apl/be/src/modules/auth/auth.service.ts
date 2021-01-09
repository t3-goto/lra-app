import { Injectable } from '@nestjs/common';
import { UtilService } from '../../common/util/util.service';
import {
  ValidateUserInDto,
  ValidateUserOutDto,
  ValidateJwtInDto,
  ValidateJwtOutDto,
} from './dto';
import { GrpcClientService } from 'src/shared/grpc-client/grpc-client.service';
import { rpc } from 'codegen/grpc';
import GetUserByUsernameRequest = rpc.GetUserByUsernameRequest;
import GetUserByUsernameResponse = rpc.GetUserByUsernameResponse;

@Injectable()
export class AuthService {
  constructor(private readonly grpcClientService: GrpcClientService) {}

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
}
