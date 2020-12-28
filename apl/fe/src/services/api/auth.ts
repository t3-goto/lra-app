import { ApiCore } from './utilities';

const authLoginUrl = 'auth/login';

export const apiAuthLogin = new ApiCore({
  getAll: true,
  getSingle: true,
  getAllByQuery: true,
  post: true,
  put: false,
  patch: true,
  delete: false,
  url: authLoginUrl,
});
