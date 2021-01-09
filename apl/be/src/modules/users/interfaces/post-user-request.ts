import { rpc } from 'codegen/grpc';
import { IsString, Length, IsNotEmpty } from 'class-validator';

export class PostUserRequest extends rpc.PostUserRequest {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @Length(4, 20)
  @IsNotEmpty()
  password: string;
}
