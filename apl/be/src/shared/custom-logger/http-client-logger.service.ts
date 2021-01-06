import { Injectable, Scope } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { DefaultLogger } from './default-logger.service';

@Injectable({ scope: Scope.TRANSIENT })
export class HttpClientLogger extends DefaultLogger {
  private setHttpClientInfo(info: HttpClientLoggerInfo) {
    this.setType(info.type);
    this.setHttpClientReqUrl(info.url);
    this.setHttpClientReqMethod(info.method);
  }

  public setHttpClientReqInfo(info: HttpClientLoggerReqInfo) {
    this.setHttpClientInfo({
      ...(info as HttpClientLoggerInfo),
      type: 'HTTP_REQ',
    });
    this.setHttpClientReqData(info.reqData);
    this.setHttpClientResStatusCode('');
    this.setHttpClientResData('');
  }

  public setHttpClientResInfo(info: HttpClientLoggerResInfo) {
    this.setHttpClientInfo({
      ...(info as HttpClientLoggerInfo),
      type: 'HTTP_RES',
    });
    this.setHttpClientReqData('');
    this.setHttpClientResStatusCode(info.resStatusCode);
    this.setHttpClientResData(info.resData);
  }
}

export type HttpClientLoggerInfo = {
  type?: 'HTTP_REQ' | 'HTTP_RES';
  url: string;
  method: HttpMethodType;
};

export type HttpClientLoggerReqInfo = {
  reqData?: string;
} & HttpClientLoggerInfo;

export type HttpClientLoggerResInfo = {
  resStatusCode?: string;
  resData?: string;
} & HttpClientLoggerInfo;

export const createHttpClientLoggerReqInfo = <T>(
  url: string,
  method: HttpMethodType,
  model: T
): HttpClientLoggerReqInfo => {
  const httpClientLoggerReqInfo: HttpClientLoggerReqInfo = {
    url,
    method,
    reqData: JSON.stringify(model),
  };
  return httpClientLoggerReqInfo;
};

export const createHttpClientLoggerResInfo = <S>(
  url: string,
  method: HttpMethodType,
  response: AxiosResponse<S>
): HttpClientLoggerResInfo => {
  const httpClientLoggerResInfo: HttpClientLoggerResInfo = {
    url,
    method,
    resStatusCode: response.status.toString(),
    resData: JSON.stringify(response.data),
  };
  return httpClientLoggerResInfo;
};

const GET = 'GET' as const;
const POST = 'POST' as const;
const PUT = 'PUT' as const;
const PATCH = 'PATCH' as const;
const DELETE = 'DELETE' as const;

type HttpMethodType =
  | typeof GET
  | typeof POST
  | typeof PUT
  | typeof PATCH
  | typeof DELETE;

export const HTTP_METHOD = {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
} as const;
