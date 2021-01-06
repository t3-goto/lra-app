import { Injectable, Scope } from '@nestjs/common';
import { DefaultLogger } from './default-logger.service';

@Injectable({ scope: Scope.TRANSIENT })
export class HttpAccessLogger extends DefaultLogger {
  private setHttpAccessInfo(info: HttpAccessLoggerInfo) {
    this.setType(info.type);
    this.setIp(info.ip);
    this.setMethod(info.method);
    this.setUrl(info.url);
  }

  public setHttpAccessReqInfo(info: HttpAccessLoggerReqInfo) {
    this.setHttpAccessInfo({
      ...(info as HttpAccessLoggerInfo),
      type: 'HTTP_REQ',
    });
    this.setHeaders(info.headers);
    this.setBody(info.body);
    this.setStatusCode('');
  }

  public setHttpAccessResInfo(info: HttpAccessLoggerResInfo) {
    this.setHttpAccessInfo({
      ...(info as HttpAccessLoggerInfo),
      type: 'HTTP_RES',
    });
    this.setHeaders('');
    this.setBody('');
    this.setStatusCode(info.statusCode);
  }
}

export type HttpAccessLoggerInfo = {
  type?: 'HTTP_REQ' | 'HTTP_RES';
  ip: string;
  method: string;
  url: string;
};

export type HttpAccessLoggerReqInfo = {
  headers?: string;
  body?: string;
} & HttpAccessLoggerInfo;

export type HttpAccessLoggerResInfo = {
  statusCode?: string;
} & HttpAccessLoggerInfo;
