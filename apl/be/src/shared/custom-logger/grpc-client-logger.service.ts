import { Injectable, Scope } from '@nestjs/common';
import { DefaultLogger } from './default-logger.service';

@Injectable({ scope: Scope.TRANSIENT })
export class GrpcClientLogger extends DefaultLogger {
  private setGrpcClientInfo(info: GrpcClientLoggerInfo) {
    this.setType(info.type);
    this.setGrpcClientReqService(info.service);
    this.setGrpcClientReqMethod(info.method);
  }

  public setGrpcClientReqInfo(info: GrpcClientLoggerReqInfo) {
    this.setGrpcClientInfo({
      ...(info as GrpcClientLoggerInfo),
      type: 'GRPC_REQ',
    });
    this.setGrpcClientReqData(info.reqData);
    this.setGrpcClientResData('');
  }

  public setGrpcClientResInfo(info: GrpcClientLoggerResInfo) {
    this.setGrpcClientInfo({
      ...(info as GrpcClientLoggerInfo),
      type: 'GRPC_RES',
    });
    this.setGrpcClientReqData('');
    this.setGrpcClientResData(info.resData);
  }
}

export type GrpcClientLoggerInfo = {
  type?: 'GRPC_REQ' | 'GRPC_RES';
  service: string;
  method: string;
};

export type GrpcClientLoggerReqInfo = {
  reqData?: string;
} & GrpcClientLoggerInfo;

export type GrpcClientLoggerResInfo = {
  resData?: string;
} & GrpcClientLoggerInfo;

export const createGrpcClientLoggerReqInfo = <T>(
  service: string,
  method: string,
  reqData: T
): GrpcClientLoggerReqInfo => {
  const GrpcClientLoggerReqInfo: GrpcClientLoggerReqInfo = {
    service,
    method,
    reqData: JSON.stringify(reqData),
  };
  return GrpcClientLoggerReqInfo;
};

export const createGrpcClientLoggerResInfo = <S>(
  service: string,
  method: string,
  resData: S
): GrpcClientLoggerResInfo => {
  const GrpcClientLoggerResInfo: GrpcClientLoggerResInfo = {
    service,
    method,
    resData: JSON.stringify(resData),
  };
  return GrpcClientLoggerResInfo;
};
