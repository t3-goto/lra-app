import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import {
  HttpClientLogger,
  createHttpClientLoggerReqInfo,
  createHttpClientLoggerResInfo,
  HTTP_METHOD,
} from '../custom-logger';
import { HttpError } from './http-error';

@Injectable()
export class HttpClientService {
  constructor(
    private readonly httpService: HttpService,
    private readonly logger: HttpClientLogger
  ) {}

  /** @param {string} url */
  public getAll<S>(url: string) {
    this.logger.setHttpClientReqInfo(
      createHttpClientLoggerReqInfo(url, HTTP_METHOD.GET, '')
    );
    this.logger.info();
    return this.httpService
      .get<S>(`${url}`)
      .toPromise()
      .then((response) => {
        this.logger.setHttpClientResInfo(
          createHttpClientLoggerResInfo(url, HTTP_METHOD.GET, response)
        );
        this.logger.info();
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /** @param {string} url */
  /** @param {object} modle */
  public getAllByQuery<T, S>(url: string, model: T) {
    this.logger.setHttpClientReqInfo(
      createHttpClientLoggerReqInfo(url, HTTP_METHOD.GET, model)
    );
    this.logger.info();
    return this.httpService
      .get<S>(`${url}`, { params: model })
      .toPromise()
      .then((response) => {
        this.logger.setHttpClientResInfo(
          createHttpClientLoggerResInfo(url, HTTP_METHOD.GET, response)
        );
        this.logger.info();
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /** @param {string} url */
  /** @param {string} id */
  public getSingle<S>(url: string, id: string) {
    this.logger.setHttpClientReqInfo(
      createHttpClientLoggerReqInfo(`${url}/${id}`, HTTP_METHOD.GET, '')
    );
    this.logger.info();
    return this.httpService
      .get<S>(`${url}/${id}`)
      .toPromise()
      .then((response) => {
        this.logger.setHttpClientResInfo(
          createHttpClientLoggerResInfo(
            `${url}/${id}`,
            HTTP_METHOD.GET,
            response
          )
        );
        this.logger.info();
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /** @param {string} url */
  /** @param {object} model */
  public post<T, S>(url: string, model: T) {
    this.logger.setHttpClientReqInfo(
      createHttpClientLoggerReqInfo(url, HTTP_METHOD.POST, model)
    );
    this.logger.info();
    return this.httpService
      .post<S>(`${url}`, model)
      .toPromise()
      .then((response) => {
        this.logger.setHttpClientResInfo(
          createHttpClientLoggerResInfo(url, HTTP_METHOD.POST, response)
        );
        this.logger.info();
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /** @param {string} url */
  /** @param {object} model */
  public put<T, S>(url: string, model: T) {
    this.logger.setHttpClientReqInfo(
      createHttpClientLoggerReqInfo(url, HTTP_METHOD.PUT, model)
    );
    this.logger.info();
    return this.httpService
      .put<S>(`${url}`, model)
      .toPromise()
      .then((response) => {
        this.logger.setHttpClientResInfo(
          createHttpClientLoggerResInfo(url, HTTP_METHOD.PUT, response)
        );
        this.logger.info();
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /** @param {string} url */
  /** @param {object} model */
  public patch<T, S>(url: string, model: T) {
    this.logger.setHttpClientReqInfo(
      createHttpClientLoggerReqInfo(url, HTTP_METHOD.PATCH, model)
    );
    this.logger.info();
    return this.httpService
      .patch<S>(`${url}`, model)
      .toPromise()
      .then((response) => {
        this.logger.setHttpClientResInfo(
          createHttpClientLoggerResInfo(url, HTTP_METHOD.PATCH, response)
        );
        this.logger.info();
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /** @param {string} url */
  /** @param {string} id */
  public remove<S>(url: string, id: string) {
    this.logger.setHttpClientReqInfo(
      createHttpClientLoggerReqInfo(`${url}/${id}`, HTTP_METHOD.DELETE, '')
    );
    this.logger.info();
    return this.httpService
      .delete<S>(`${url}/${id} `)
      .toPromise()
      .then((response) => {
        this.logger.setHttpClientResInfo(
          createHttpClientLoggerResInfo(
            `${url}/${id}`,
            HTTP_METHOD.DELETE,
            response
          )
        );
        this.logger.info();
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /**
   * Success Callback.
   */
  private successCallback<S>(response: AxiosResponse<S>): S {
    return response.data;
  }

  /**
   * Error Callback.
   */
  private errorCallback(error: any): null {
    throw new HttpError(error);
  }
}
