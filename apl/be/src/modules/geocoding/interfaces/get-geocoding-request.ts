import { rpc } from 'codegen/grpc';
import { IsString, IsNotEmpty } from 'class-validator';

export class GetGeocodingRequest extends rpc.GetGeocodingRequest {
  @IsString()
  @IsNotEmpty()
  address: string;
}
