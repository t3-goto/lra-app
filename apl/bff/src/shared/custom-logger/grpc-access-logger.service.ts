import { Injectable, Scope } from '@nestjs/common';
import { DefaultLogger } from './default-logger.service';

@Injectable({ scope: Scope.TRANSIENT })
export class GrpcAccessLogger extends DefaultLogger {
  private setGrpcAccessInfo(info: GrpcAccessLoggerInfo) {
    this.setType(info.type);
    this.setCallClass(info.callClass);
    this.setCallFunc(info.callFunc);
    this.setMetadata(info.metadata);
    this.setGrpcData(info.grpcData);
  }
  public setGrpcAccessReqInfo(info: GrpcAccessLoggerReqInfo) {
    this.setGrpcAccessInfo({
      ...(info as GrpcAccessLoggerInfo),
      type: 'GRPC_REQ',
    });
  }
  public setGrpcAccessResInfo(info: GrpcAccessLoggerResInfo) {
    this.setGrpcAccessInfo({
      ...(info as GrpcAccessLoggerInfo),
      type: 'GRPC_RES',
    });
  }
}

export type GrpcAccessLoggerInfo = {
  type?: 'GRPC_REQ' | 'GRPC_RES';
  callClass: string;
  callFunc: string;
  metadata: string;
  grpcData: string;
};

export type GrpcAccessLoggerReqInfo = {} & GrpcAccessLoggerInfo;

export type GrpcAccessLoggerResInfo = {} & GrpcAccessLoggerInfo;
