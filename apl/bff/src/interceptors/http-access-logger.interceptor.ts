import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Request } from 'express';
import {
  HttpAccessLogger,
  HttpAccessLoggerReqInfo,
  HttpAccessLoggerResInfo,
} from '../shared/custom-logger';

@Injectable()
export class HttpAccessLoggerInterceptor implements NestInterceptor {
  constructor(private logger: HttpAccessLogger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest<Request>();
    const httpAccessLoggerReqInfo: HttpAccessLoggerReqInfo = {
      ip: req.ip,
      url: req.originalUrl,
      method: req.method,
      headers: JSON.stringify(req.headers),
      body: JSON.stringify(req.body),
    };
    this.logger.setHttpAccessReqInfo(httpAccessLoggerReqInfo);
    this.logger.info();
    return next.handle().pipe(
      tap(() => {
        const res = context.switchToHttp().getResponse();
        const httpAccessLoggerResInfo: HttpAccessLoggerResInfo = {
          ip: req.ip,
          url: req.originalUrl,
          method: req.method,
          statusCode: JSON.stringify(res.statusCode),
        };
        this.logger.setHttpAccessResInfo(httpAccessLoggerResInfo);
        this.logger.info();
      })
    );
  }
}
