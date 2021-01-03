import { Injectable, Scope } from '@nestjs/common';
import { DefaultLogger } from './default-logger.service';

@Injectable({ scope: Scope.TRANSIENT })
export class CacheClientLogger extends DefaultLogger {
  private setCacheClientInfo(info: CacheClientLoggerInfo) {
    this.setType(info.type);
    this.setCacheClientMethod(info.method);
    this.setCacheClientKey(info.key);
  }

  public setCacheClientReqInfo(info: CacheClientLoggerReqInfo) {
    this.setCacheClientInfo({
      ...(info as CacheClientLoggerInfo),
      type: 'CACHE_REQ',
    });
    this.setCacheClientValue('');
  }

  public setCacheClientResInfo(info: CacheClientLoggerResInfo) {
    this.setCacheClientInfo({
      ...(info as CacheClientLoggerInfo),
      type: 'CACHE_RES',
    });
    this.setCacheClientValue(info.value);
  }
}

export type CacheClientLoggerInfo = {
  type?: 'CACHE_REQ' | 'CACHE_RES';
  method: CacheMethodType;
  key: string;
};

export type CacheClientLoggerReqInfo = {} & CacheClientLoggerInfo;

export type CacheClientLoggerResInfo = {
  value?: string;
} & CacheClientLoggerInfo;

export const createCacheClientLoggerReqInfo = (
  method: CacheMethodType,
  key: string
): CacheClientLoggerReqInfo => {
  const cacheClientLoggerReqInfo: CacheClientLoggerReqInfo = {
    method,
    key,
  };
  return cacheClientLoggerReqInfo;
};

export const createCacheClientLoggerResInfo = (
  method: CacheMethodType,
  key: string,
  value: any
): CacheClientLoggerResInfo => {
  const cacheClientLoggerResInfo: CacheClientLoggerResInfo = {
    method,
    key,
    value: JSON.stringify(value),
  };
  return cacheClientLoggerResInfo;
};

const GET = 'GET' as const;
const SET = 'SET' as const;

type CacheMethodType = typeof GET | typeof SET;

export const CACHE_METHOD = {
  GET,
  SET,
} as const;
