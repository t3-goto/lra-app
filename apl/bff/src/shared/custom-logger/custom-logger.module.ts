import { Module } from '@nestjs/common';
import {
  DefaultLogger,
  HttpAccessLogger,
  GrpcAccessLogger,
  HttpClientLogger,
  GrpcClientLogger,
  CacheClientLogger,
} from './';
import { configure, getLogger } from 'log4js';

/**
 * Log Message Patterns.
 */
const patternHead = `[%[%d{yyyy/MM/dd hh.mm.ss.SSS}%]],[%[%5p%]],[%[%c%]],[%[%X{type}%]]`;
const patternLogic = `[%[%X{file} %X{line}:%X{column} %X{function}%]]`;
const patternOptInfo = `[%m]`;
const patternHttpAccessInfo = `[%X{ip} %X{method} %X{url}],[%X{headers},%X{body},%X{statusCode}]`;
const patternGrpcAccessInfo = `[%X{callClass}.%X{callFunc}],[%X{metadata},%X{grpcData}]`;
const patternHttpClientInfo = `[%X{httpClientReqMethod} %X{httpClientReqUrl}],[%X{httpClientReqData},%X{httpClientResStatusCode},%X{httpClientResData}]`;
const patternGrpcClientInfo = `[%X{grpcClientReqService} %X{grpcClientReqMethod}],[%X{grpcClientReqData},%X{grpcClientResData}]`;
const patternCacheClientInfo = `[%X{cacheClientMethod} %X{cacheClientKey}],[%X{cacheClientValue}]`;

/**
 * Log Messages.
 */
const defaultMessage = `${patternHead},${patternLogic},${patternOptInfo}`;
const httpAccessMessage = `${patternHead},${patternHttpAccessInfo}`;
const grpcAccessMessage = `${patternHead},${patternGrpcAccessInfo}`;
const httpClientMessage = `${patternHead},${patternHttpClientInfo}`;
const grpcClientMessage = `${patternHead},${patternGrpcClientInfo}`;
const cacheClientMessage = `${patternHead},${patternCacheClientInfo}`;

/**
 * Log Categories.
 */
const defaultCategory = {
  appenders: ['default'],
  level: 'INFO',
};

const httpAccessCategory = {
  appenders: ['httpAccess'],
  level: 'INFO',
};

const grpcAccessCategory = {
  appenders: ['grpcAccess'],
  level: 'INFO',
};

const httpClientCategory = {
  appenders: ['httpClient'],
  level: 'INFO',
};

const grpcClientCategory = {
  appenders: ['grpcClient'],
  level: 'INFO',
};

const cacheClientCategory = {
  appenders: ['cacheClient'],
  level: 'INFO',
};

/**
 * Log Appenders.
 */
const defaultAppender = {
  type: 'stdout',
  layout: {
    type: 'pattern',
    pattern: defaultMessage,
  },
};

const httpAccessAppender = {
  type: 'stdout',
  layout: {
    type: 'pattern',
    pattern: httpAccessMessage,
  },
};

const grpcAccessAppender = {
  type: 'stdout',
  layout: {
    type: 'pattern',
    pattern: grpcAccessMessage,
  },
};

const httpClientAppender = {
  type: 'stdout',
  layout: {
    type: 'pattern',
    pattern: httpClientMessage,
  },
};

const grpcClientAppender = {
  type: 'stdout',
  layout: {
    type: 'pattern',
    pattern: grpcClientMessage,
  },
};

const cacheClientAppender = {
  type: 'stdout',
  layout: {
    type: 'pattern',
    pattern: cacheClientMessage,
  },
};

const loggerConfigs = {
  appenders: {
    default: defaultAppender,
    httpAccess: httpAccessAppender,
    grpcAccess: grpcAccessAppender,
    httpClient: httpClientAppender,
    grpcClient: grpcClientAppender,
    cacheClient: cacheClientAppender,
  },
  categories: {
    default: defaultCategory,
    DEFAULT: defaultCategory,
    HTTP_ACCESS: httpAccessCategory,
    GRPC_ACCESS: grpcAccessCategory,
    HTTP_CLIENT: httpClientCategory,
    GRPC_CLIENT: grpcClientCategory,
    CACHE_CLIENT: cacheClientCategory,
  },
};

const loggerFactories = [
  {
    provide: DefaultLogger,
    useFactory: () => {
      configure(loggerConfigs);
      return new DefaultLogger(getLogger('DEFAULT'));
    },
  },
  {
    provide: HttpAccessLogger,
    useFactory: () => {
      configure(loggerConfigs);
      return new HttpAccessLogger(getLogger('HTTP_ACCESS'));
    },
  },
  {
    provide: GrpcAccessLogger,
    useFactory: () => {
      configure(loggerConfigs);
      return new GrpcAccessLogger(getLogger('GRPC_ACCESS'));
    },
  },
  {
    provide: HttpClientLogger,
    useFactory: () => {
      configure(loggerConfigs);
      return new HttpClientLogger(getLogger('HTTP_CLIENT'));
    },
  },
  {
    provide: GrpcClientLogger,
    useFactory: () => {
      configure(loggerConfigs);
      return new GrpcClientLogger(getLogger('GRPC_CLIENT'));
    },
  },
  {
    provide: CacheClientLogger,
    useFactory: () => {
      configure(loggerConfigs);
      return new CacheClientLogger(getLogger('CACHE_CLIENT'));
    },
  },
];

@Module({
  providers: [...loggerFactories],
  exports: [...loggerFactories],
})
export class CustomLoggerModule {}
