import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { CustomLogger } from '../custom-logger/custom-logger.service';
import { HttpError } from './http-error';
import { HttpLoggingInfo, HTTP_REQ, HTTP_RES } from './http-logging-info';
@Injectable()
export class HttpClientService {
  constructor(
    private readonly httpService: HttpService,
    private readonly customLogger: CustomLogger
  ) {}

  /** @param {string} url */
  public getAll<S>(url: string) {
    const httpLoggingReqInfo: HttpLoggingInfo = { type: HTTP_REQ, url };
    this.customLogger.info(JSON.stringify(httpLoggingReqInfo));
    return this.httpService
      .get<S>(`${url}`)
      .toPromise()
      .then((response) => {
        const httpLoggingResInfo: HttpLoggingInfo = {
          ...httpLoggingReqInfo,
          type: HTTP_RES,
          header: response.headers,
          status: response.status,
          data: response.data,
        };
        this.customLogger.info(JSON.stringify(httpLoggingResInfo));
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /** @param {string} url */
  /** @param {object} modle */
  public getAllByQuery<T, S>(url: string, model: T) {
    const httpLoggingReqInfo: HttpLoggingInfo = { type: HTTP_REQ, url, model };
    this.customLogger.info(JSON.stringify(httpLoggingReqInfo));
    return this.httpService
      .get<S>(`${url}`, { params: model })
      .toPromise()
      .then((response) => {
        const httpLoggingResInfo: HttpLoggingInfo = {
          ...httpLoggingReqInfo,
          type: HTTP_RES,
          header: response.headers,
          status: response.status,
          data: response.data,
        };
        this.customLogger.info(JSON.stringify(httpLoggingResInfo));
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /** @param {string} url */
  /** @param {string} id */
  public getSingle<S>(url: string, id: string) {
    const httpLoggingReqInfo: HttpLoggingInfo = { type: HTTP_REQ, url, id };
    this.customLogger.info(JSON.stringify(httpLoggingReqInfo));
    return this.httpService
      .get<S>(`${url}/${id}`)
      .toPromise()
      .then((response) => {
        const httpLoggingResInfo: HttpLoggingInfo = {
          ...httpLoggingReqInfo,
          type: HTTP_RES,
          header: response.headers,
          status: response.status,
          data: response.data,
        };
        this.customLogger.info(JSON.stringify(httpLoggingResInfo));
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /** @param {string} url */
  /** @param {object} model */
  public post<T, S>(url: string, model: T) {
    const httpLoggingReqInfo: HttpLoggingInfo = { type: HTTP_REQ, url, model };
    this.customLogger.info(JSON.stringify(httpLoggingReqInfo));
    return this.httpService
      .post<S>(`${url}`, model)
      .toPromise()
      .then((response) => {
        const httpLoggingResInfo: HttpLoggingInfo = {
          ...httpLoggingReqInfo,
          type: HTTP_RES,
          header: response.headers,
          status: response.status,
          data: response.data,
        };
        this.customLogger.info(JSON.stringify(httpLoggingResInfo));
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /** @param {string} url */
  /** @param {object} model */
  public put<T, S>(url: string, model: T) {
    const httpLoggingReqInfo: HttpLoggingInfo = { type: HTTP_REQ, url, model };
    this.customLogger.info(JSON.stringify(httpLoggingReqInfo));
    return this.httpService
      .put<S>(`${url}`, model)
      .toPromise()
      .then((response) => {
        const httpLoggingResInfo: HttpLoggingInfo = {
          ...httpLoggingReqInfo,
          type: HTTP_RES,
          header: response.headers,
          status: response.status,
          data: response.data,
        };
        this.customLogger.info(JSON.stringify(httpLoggingResInfo));
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /** @param {string} url */
  /** @param {object} model */
  public patch<T, S>(url: string, model: T) {
    const httpLoggingReqInfo: HttpLoggingInfo = { type: HTTP_REQ, url, model };
    this.customLogger.info(JSON.stringify(httpLoggingReqInfo));
    return this.httpService
      .patch<S>(`${url}`, model)
      .toPromise()
      .then((response) => {
        const httpLoggingResInfo: HttpLoggingInfo = {
          ...httpLoggingReqInfo,
          type: HTTP_RES,
          header: response.headers,
          status: response.status,
          data: response.data,
        };
        this.customLogger.info(JSON.stringify(httpLoggingResInfo));
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /** @param {string} url */
  /** @param {string} id */
  public remove<S>(url: string, id: string) {
    const httpLoggingReqInfo: HttpLoggingInfo = { type: HTTP_REQ, url, id };
    this.customLogger.info(JSON.stringify(httpLoggingReqInfo));
    return this.httpService
      .delete<S>(`${url}/${id} `)
      .toPromise()
      .then((response) => {
        const httpLoggingResInfo: HttpLoggingInfo = {
          ...httpLoggingReqInfo,
          type: HTTP_RES,
          header: response.headers,
          status: response.status,
          data: response.data,
        };
        this.customLogger.info(JSON.stringify(httpLoggingResInfo));
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
