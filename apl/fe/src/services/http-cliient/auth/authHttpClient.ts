import { HttpClient, HttpClientOptions } from '../common';

const baseUrl = process.env.BFF_BASE_URL as string;
const resourcePath = 'auth/login';

const options: HttpClientOptions = {
  baseUrl,
  resourcePath,
};

/**
 * Auth Http Client.
 */
export const authHttpClient = new HttpClient(options);
