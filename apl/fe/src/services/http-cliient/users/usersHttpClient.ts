import { HttpClient, HttpClientOptions } from '../common';

const resourcePath = 'users';

/**
 * Users Http Client.
 */
export const createUsersHttpClient = (baseUrl: string): HttpClient => {
  const options: HttpClientOptions = {
    baseUrl,
    resourcePath,
  };
  return new HttpClient(options);
};
