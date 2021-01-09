import { GrpcTimeoutInterceptor } from './grpc-timeout.interceptor';

describe('GrpcTimeoutInterceptor', () => {
  it('should be defined', () => {
    expect(new GrpcTimeoutInterceptor()).toBeDefined();
  });
});
