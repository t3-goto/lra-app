import { ApiCore } from './utilities';

const usersUrl = 'restaurants';

export const apiRestaurants = new ApiCore({
  getAll: true,
  getSingle: true,
  getAllByQuery: true,
  post: true,
  put: false,
  patch: true,
  delete: false,
  url: usersUrl,
});
