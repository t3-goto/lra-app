import { ApiCore } from './utilities';

const usersUrl = 'users';

export const apiUsers = new ApiCore({
  getAll: true,
  getSingle: true,
  getAllByQuery: true,
  post: true,
  put: false,
  patch: true,
  delete: false,
  url: usersUrl,
});
