import { ApiCore } from './utilities';

const url = 'cats';
const plural = 'cats';
const single = 'cat';

// plural and single may be used for message logic if needed in the ApiCore class.

export const apiCats = new ApiCore({
  getAll: true,
  getSingle: true,
  post: true,
  put: false,
  patch: true,
  delete: false,
  url,
  plural,
  single,
});

// apiTasks.massUpdate = () => {
//   // Add custom api call logic here
// };
