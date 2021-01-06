import { GrpcAccessLoggerInterceptor } from './grpc-access-logger.interceptor';

describe('GrpcLoggingInterceptor', () => {
  it('should be defined', () => {
    expect(new GrpcAccessLoggerInterceptor()).toBeDefined();
  });
});
