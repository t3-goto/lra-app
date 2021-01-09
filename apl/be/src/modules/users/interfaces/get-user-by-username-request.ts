import { rpc } from 'codegen/grpc';
import { IsString } from 'class-validator';

export class GetUserByUsernameRequest extends rpc.GetUserByUsernameRequest {
  @IsString()
  username: string;
}
