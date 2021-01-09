import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class GrpcTimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(100000),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          return throwError(new RpcException(err.message));
        }
        return throwError(err);
      })
    );
  }
}
