import { rpc } from 'codegen/grpc';
import { IsPositive } from 'class-validator';

export class DeleteUserRequest extends rpc.DeleteUserRequest {
  @IsPositive()
  userId: number;
}
