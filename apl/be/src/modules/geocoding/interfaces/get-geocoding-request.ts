import { IsString, IsNotEmpty } from 'class-validator';
import { GetGeocodingRequest as Request } from '../../../interfaces';

export class GetGeocodingRequest extends Request {
  @IsString()
  @IsNotEmpty()
  address: string;
}
