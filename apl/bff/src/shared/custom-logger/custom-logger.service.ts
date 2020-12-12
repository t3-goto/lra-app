import { LoggerService, Injectable, Scope } from '@nestjs/common';
import { Logger } from 'log4js';
import { Request } from 'express';
import { basename } from 'path';

@Injectable({ scope: Scope.TRANSIENT })
export class CustomLogger implements LoggerService {
  constructor(private readonly logger: Logger) {}

  setRequestInfo(req: Request) {
    this.logger.addContext('ip', req.ip);
    this.logger.addContext('method', req.method);
    this.logger.addContext('uri', req.originalUrl);
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
