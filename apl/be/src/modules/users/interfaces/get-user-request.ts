import { IsPositive } from 'class-validator';
import { GetUserRequest as Request } from '../../../interfaces';

export class GetUserRequest extends Request {
  @IsPositive()
  userId: number;
}
