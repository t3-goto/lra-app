import axios from 'axios';
import { HttpResponseHandler } from './HttpResponseHandler';

/** @param {string} baseUrl */
/** @param {string} resourcePath */
const getAll = <S>(baseUrl: string, resourcePath: string) => {
  return axios
    .get<S>(`${baseUrl}/${resourcePath}`)
    .then(HttpResponseHandler.successCallback)
    .catch(HttpResponseHandler.errorCallback);
};

/** @param {string} baseUrl */
/** @param {string} resourcePath */
/** @param {object} query */
const getAllByQuery = <T, S>(
  baseUrl: string,
  resourcePath: string,
  model: T
) => {
  return axios
    .get<S>(`${baseUrl}/${resourcePath}`, { params: model })
    .then(HttpResponseHandler.successCallback)
    .catch(HttpResponseHandler.errorCallback);
};

/** @param {string} baseUrl */
/** @param {string} resourcePath */
/** @param {string} id */
const getSingle = <S>(baseUrl: string, resourcePath: string, id: string) => {
  return axios
    .get<S>(`${baseUrl}/${resourcePath}/${id}`)
    .then(HttpResponseHandler.successCallback)
    .catch(HttpResponseHandler.errorCallback);
};

/** @param {string} baseUrl */
/** @param {string} resourcePath */
/** @param {object} model */
const post = <T, S>(baseUrl: string, resourcePath: string, model: T) => {
  return axios
    .post<S>(`${baseUrl}/${resourcePath}`, model)
    .then(HttpResponseHandler.successCallback)
    .catch(HttpResponseHandler.errorCallback);
};

/** @param {string} baseUrl */
/** @param {string} resourcePath */
/** @param {object} model */
const put = <T, S>(baseUrl: string, resourcePath: string, model: T) => {
  return axios
    .put<S>(`${baseUrl}/${resourcePath}`, model)
    .then(HttpResponseHandler.successCallback)
    .catch(HttpResponseHandler.errorCallback);
};

/** @param {string} baseUrl */
/** @param {string} resourcePath */
/** @param {object} model */
const patch = <T, S>(baseUrl: string, resourcePath: string, model: T) => {
  return axios
    .patch<S>(`${baseUrl}/${resourcePath}`, model)
    .then(HttpResponseHandler.successCallback)
    .catch(HttpResponseHandler.errorCallback);
};

/** @param {string} baseUrl */
/** @param {string} resourcePath */
/** @param {string} id */
const remove = <S>(baseUrl: string, resourcePath: string, id: string) => {
  return axios
    .delete<S>(`${baseUrl}/${resourcePath}/${id} `)
    .then(HttpResponseHandler.successCallback)
    .catch(HttpResponseHandler.errorCallback);
};

/**
 * Http Provider.
 */
export const HttpProvider = {
  getAll,
  getAllByQuery,
  getSingle,
  post,
  put,
  patch,
  remove,
};
