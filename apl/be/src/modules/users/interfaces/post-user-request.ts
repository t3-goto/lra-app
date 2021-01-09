import { IsString, Length, IsNotEmpty } from 'class-validator';
import { PostUserRequest as Request } from '../../../interfaces';

export class PostUserRequest extends Request {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @Length(4, 20)
  @IsNotEmpty()
  password: string;
}
