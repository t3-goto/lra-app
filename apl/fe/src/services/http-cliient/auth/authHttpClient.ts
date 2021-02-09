import { HttpClient, HttpClientOptions } from '../common';

const resourcePath = 'auth/login';

/**
 * Auth Http Client.
 */
export const createAuthHttpClient = (baseUrl: string): HttpClient => {
  const options: HttpClientOptions = {
    baseUrl,
    resourcePath,
  };
  return new HttpClient(options);
};
