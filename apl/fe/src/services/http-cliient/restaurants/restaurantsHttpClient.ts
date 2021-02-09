import { HttpClient, HttpClientOptions } from '../common';

const resourcePath = 'restaurants';

/**
 * Restaurants Http Client.
 */
export const createRestaurantsHttpClient = (baseUrl: string): HttpClient => {
  const options: HttpClientOptions = {
    baseUrl,
    resourcePath,
  };
  return new HttpClient(options);
};
