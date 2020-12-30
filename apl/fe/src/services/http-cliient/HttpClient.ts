import { HttpProvider } from './HttpProvider';
import { HttpClientOptions } from './HttpClientOptions';

/**
 * Http Client.
 */
export class HttpClient {
  public getAll: <S>() => Promise<{ error: any } | { payload: S }>;

  public getAllByQuery: <T, S>(
    model: T
  ) => Promise<{ error: any } | { payload: S }>;

  public getSingle: <S>(id: any) => Promise<{ error: any } | { payload: S }>;

  public post: <T, S>(model: T) => Promise<{ error: any } | { payload: S }>;

  public put: <T, S>(model: T) => Promise<{ error: any } | { payload: S }>;

  public patch: <T, S>(model: T) => Promise<{ error: any } | { payload: S }>;

  public remove: <S>(id: any) => Promise<{ error: any } | { payload: S }>;

  constructor(options: HttpClientOptions) {
    this.getAll = <S>() => {
      return HttpProvider.getAll<S>(options.baseUrl, options.resourcePath);
    };

    this.getAllByQuery = <T, S>(model: T) => {
      return HttpProvider.getAllByQuery<T, S>(
        options.baseUrl,
        options.resourcePath,
        model
      );
    };

    this.getSingle = <S>(id: string) => {
      return HttpProvider.getSingle<S>(
        options.baseUrl,
        options.resourcePath,
        id
      );
    };

    this.post = <T, S>(model: T) => {
      return HttpProvider.post<T, S>(
        options.baseUrl,
        options.resourcePath,
        model
      );
    };

    this.put = <T, S>(model: T) => {
      return HttpProvider.put<T, S>(
        options.baseUrl,
        options.resourcePath,
        model
      );
    };

    this.patch = <T, S>(model: T) => {
      return HttpProvider.patch<T, S>(
        options.baseUrl,
        options.resourcePath,
        model
      );
    };

    this.remove = <S>(id: string) => {
      return HttpProvider.remove<S>(options.baseUrl, options.resourcePath, id);
    };
  }
}
