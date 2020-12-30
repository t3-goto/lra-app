import { HttpClient } from './HttpClient';
import { HttpClientOptions } from './HttpClientOptions';

const baseUrl = process.env.BFF_BASE_URL as string;
const resourcePath = 'users';

const options: HttpClientOptions = {
  baseUrl,
  resourcePath,
};

/**
 * Users Http Client.
 */
export const usersHttpClient = new HttpClient(options);
