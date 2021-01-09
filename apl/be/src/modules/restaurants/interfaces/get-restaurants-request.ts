import {
  IsString,
  IsOptional,
  IsLatitude,
  IsLongitude,
  IsIn,
} from 'class-validator';
import { GetRestaurantsRequest as Request } from '../../../interfaces';

export class GetRestaurantsRequest extends Request {
  @IsLatitude()
  @IsOptional()
  latitude: number;

  @IsLongitude()
  @IsOptional()
  longitude: number;

  @IsIn([1, 2, 3, 4, 5])
  @IsOptional()
  range: number;

  @IsIn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  @IsOptional()
  pageOffset: number;

  @IsOptional()
  hitPerPage: number;

  @IsOptional()
  @IsString()
  address: string;
}
