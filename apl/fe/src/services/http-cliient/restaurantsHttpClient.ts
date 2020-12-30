import { HttpClient } from './HttpClient';
import { HttpClientOptions } from './HttpClientOptions';

const baseUrl = process.env.BFF_BASE_URL as string;
const resourcePath = 'restaurants';

const options: HttpClientOptions = {
  baseUrl,
  resourcePath,
};

/**
 * Restaurants Http Client.
 */
export const restaurantsHttpClient = new HttpClient(options);
