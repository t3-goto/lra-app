import { ApiCore } from './utilities';

const loginUrl = 'auth/login';

// plural and single may be used for message logic if needed in the ApiCore class.

export const apiAuthLogin = new ApiCore({
  getAll: true,
  getSingle: true,
  post: true,
  put: false,
  patch: true,
  delete: false,
  url: loginUrl,
});

// apiTasks.massUpdate = () => {
//   // Add custom api call logic here
// };
