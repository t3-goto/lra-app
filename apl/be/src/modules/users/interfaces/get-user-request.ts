import { rpc } from 'codegen/grpc';
import { IsPositive } from 'class-validator';

export class GetUserRequest extends rpc.GetUserRequest {
  @IsPositive()
  userId: number;
}
