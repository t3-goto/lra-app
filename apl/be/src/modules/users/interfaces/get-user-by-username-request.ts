import { IsString, IsNotEmpty } from 'class-validator';
import { GetUserByUsernameRequest as Request } from '../../../interfaces';

export class GetUserByUsernameRequest extends Request {
  @IsString()
  @IsNotEmpty()
  username: string;
}
