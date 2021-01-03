import { LoggerService, Injectable, Scope } from '@nestjs/common';
import { Logger } from 'log4js';
import { basename } from 'path';

@Injectable({ scope: Scope.TRANSIENT })
export class DefaultLogger implements LoggerService {
  constructor(protected readonly logger: Logger) {}

  setType(v: string) {
    this.logger.addContext('type', v);
  }

  setIp(v: string) {
    this.logger.addContext('ip', v);
  }

  setMethod(v: string) {
    this.logger.addContext('method', v);
  }

  setUrl(v: string) {
    this.logger.addContext('url', v);
  }

  setHeaders(v: string) {
    this.logger.addContext('headers', v);
  }

  setBody(v: string) {
    this.logger.addContext('body', v);
  }

  setStatusCode(v: string) {
    this.logger.addContext('statusCode', v);
  }

  setCallClass(v: string) {
    this.logger.addContext('callClass', v);
  }

  setCallFunc(v: string) {
    this.logger.addContext('callFunc', v);
  }

  setMetadata(v: string) {
    this.logger.addContext('metadata', v);
  }

  setGrpcData(v: string) {
    this.logger.addContext('grpcData', v);
  }

  setHttpClientReqUrl(v: string) {
    this.logger.addContext('httpClientReqUrl', v);
  }

  setHttpClientReqMethod(v: string) {
    this.logger.addContext('httpClientReqMethod', v);
  }

  setHttpClientReqData(v: string) {
    this.logger.addContext('httpClientReqData', v);
  }

  setHttpClientResStatusCode(v: string) {
    this.logger.addContext('httpClientResStatusCode', v);
  }

  setHttpClientResData(v: string) {
    this.logger.addContext('httpClientResData', v);
  }

  setGrpcClientReqService(v: string) {
    this.logger.addContext('grpcClientReqService', v);
  }

  setGrpcClientReqMethod(v: string) {
    this.logger.addContext('grpcClientReqMethod', v);
  }

  setGrpcClientReqData(v: string) {
    this.logger.addContext('grpcClientReqData', v);
  }

  setGrpcClientResData(v: string) {
    this.logger.addContext('grpcClientResData', v);
  }

  setCacheClientMethod(v: string) {
    this.logger.addContext('cacheClientMethod', v);
  }

  setCacheClientKey(v: string) {
    this.logger.addContext('cacheClientKey', v);
  }

  setCacheClientValue(v: string) {
    this.logger.addContext('cacheClientValue', v);
  }

  log(message?: any, context?: string) {
    this.setStack(this.log);
    this.logger.log(message ? message : '[]', context ? context : '');
  }

  error(message?: any, trace?: string, context?: string) {
    this.setStack(this.error);
    this.logger.error(
      message ? message : '[]',
      trace ? trace : '',
      context ? context : ''
    );
  }

  warn(message?: any, context?: string) {
    this.setStack(this.warn);
    this.logger.warn(message ? message : '[]', context ? context : '');
  }

  info(message?: any, context?: string) {
    this.setStack(this.info);
    this.logger.info(message ? message : '[]', context ? context : '');
  }

  debug?(message?: any, context?: string) {
    this.setStack(this.debug);
    this.logger.debug(message ? message : '[]', context ? context : '');
  }

  private setStack(caller?: Function) {
    const stack = this.getTrace(caller);
    this.logger.addContext('file', stack.file);
    this.logger.addContext('line', stack.line);
    this.logger.addContext('column', stack.column);
    this.logger.addContext('function', stack.func);
  }

  private getTrace(caller?: Function) {
    const original = Error.prepareStackTrace;
    const error = { stack: { func: '', file: '', line: 0, column: 0 } };
    Error.captureStackTrace(error, caller || this.getTrace);
    Error.prepareStackTrace = this.prepareStackTrace;
    const stack = error.stack;
    Error.prepareStackTrace = original;
    return stack;
  }

  private prepareStackTrace(error, structuredStackTrace) {
    const trace = structuredStackTrace[0];
    return {
      // method name
      func: trace.getMethodName() || trace.getFunctionName() || '<anonymous>',
      // file name
      file: basename(trace.getFileName()),
      // line number
      line: trace.getLineNumber(),
      // column number
      column: trace.getColumnNumber(),
    };
  }
}
