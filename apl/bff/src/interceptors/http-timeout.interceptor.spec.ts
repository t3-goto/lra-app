import { HttpTimeoutInterceptor } from './http-timeout.interceptor';

describe('HttpTimeoutInterceptor', () => {
  it('should be defined', () => {
    expect(new HttpTimeoutInterceptor()).toBeDefined();
  });
});
