import axios from 'axios';
import { handleResponse, handleError } from './response';

// Define your api url from any source.
// Pulling from your .env file when on the server or from localhost when locally
const BASE_URL = process.env.BFF_BASE_URL;

/** @param {string} resource */

const getAll = (resource: string) => {
  return axios
    .get(`${BASE_URL}/${resource}`)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} resource */

/** @param {string} id */

const getSingle = (resource: string, id: string) => {
  return axios
    .get(`${BASE_URL}/${resource}/${id}`)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} resource */

/** @param {object} model */

const post = (resource: string, model: any) => {
  return axios
    .post(`${BASE_URL}/${resource}`, model)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} resource */

/** @param {object} model */

const put = (resource: string, model: any) => {
  return axios
    .put(`${BASE_URL}/${resource}`, model)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} resource */

/** @param {object} model */

const patch = (resource: string, model: any) => {
  return axios
    .patch(`${BASE_URL}/${resource}`, model)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} resource */

/** @param {string} id */

const remove = (resource: string, id: undefined) => {
  return axios
    .delete(`${BASE_URL}/${resource}`, id)
    .then(handleResponse)
    .catch(handleError);
};

export const apiProvider = {
  getAll,
  getSingle,
  post,
  put,
  patch,
  remove,
};
