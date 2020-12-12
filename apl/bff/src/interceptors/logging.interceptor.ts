import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CustomLogger } from '../shared/custom-logger/custom-logger.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private logger: CustomLogger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // const req = context.switchToHttp().getRequest();
    // const message = JSON.stringify({
    //   headers: req.headers,
    //   body: req.body,
    // });
    // this.logger.setRequestInfo(req);
    // this.logger.info(message);
    return next.handle().pipe(
      tap(() => {
        const res = context.switchToHttp().getResponse();
        const message = JSON.stringify({
          statusCode: res.statusCode,
        });
        this.logger.info(message);
      })
    );
  }
}
