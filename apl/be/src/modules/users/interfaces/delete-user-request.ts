import { IsPositive } from 'class-validator';
import { DeleteUserRequest as Request } from '../../../interfaces';

export class DeleteUserRequest extends Request {
  @IsPositive()
  userId: number;
}
