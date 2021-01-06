import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  GrpcAccessLogger,
  GrpcAccessLoggerReqInfo,
  GrpcAccessLoggerResInfo,
} from '../shared/custom-logger';

@Injectable()
export class GrpcAccessLoggerInterceptor implements NestInterceptor {
  constructor(private logger: GrpcAccessLogger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const rpcArgumentsHost = context.switchToRpc();
    const callClass = context.getClass().name;
    const callFunc = context.getHandler().name;
    const metadata = JSON.stringify(rpcArgumentsHost.getContext());
    const grpcData = JSON.stringify(rpcArgumentsHost.getData());
    const grpcAccessLoggerReqInfo: GrpcAccessLoggerReqInfo = {
      callClass,
      callFunc,
      metadata,
      grpcData,
    };
    this.logger.setGrpcAccessReqInfo(grpcAccessLoggerReqInfo);
    this.logger.info();
    return next.handle().pipe(
      tap(() => {
        const rpcArgumentsHost = context.switchToRpc();
        const callClass = context.getClass().name;
        const callFunc = context.getHandler().name;
        const metadata = JSON.stringify(rpcArgumentsHost.getContext());
        const grpcData = JSON.stringify(rpcArgumentsHost.getData());
        const grpcAccessLoggerResInfo: GrpcAccessLoggerResInfo = {
          callClass,
          callFunc,
          metadata,
          grpcData,
        };
        this.logger.setGrpcAccessResInfo(grpcAccessLoggerResInfo);
        this.logger.info();
      })
    );
  }
}
