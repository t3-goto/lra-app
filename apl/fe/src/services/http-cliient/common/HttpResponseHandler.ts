import { AxiosResponse } from 'axios';

/**
 * Success Callback.
 */
const successCallback = <S>(response: AxiosResponse<S>): { payload: S } => {
  return { payload: response.data };
};

/**
 * Error Callback.
 */
const errorCallback = (error: any): { error: any } => {
  return { error };
};

export const HttpResponseHandler = {
  successCallback,
  errorCallback,
};
