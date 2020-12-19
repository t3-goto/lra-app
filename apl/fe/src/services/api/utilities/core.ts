import { apiProvider } from './provider';

export class ApiCore {
  getAll!: () => Promise<any>;

  getSingle!: (id: any) => Promise<any>;

  post!: (model: any) => Promise<any>;

  put!: (model: any) => Promise<any>;

  patch!: (model: any) => Promise<any>;

  remove!: (id: any) => Promise<any>;

  constructor(options: any) {
    if (options.getAll) {
      this.getAll = () => {
        return apiProvider.getAll(options.url);
      };
    }

    if (options.getSingle) {
      this.getSingle = (id) => {
        return apiProvider.getSingle(options.url, id);
      };
    }

    if (options.post) {
      this.post = (model) => {
        return apiProvider.post(options.url, model);
      };
    }

    if (options.put) {
      this.put = (model) => {
        return apiProvider.put(options.url, model);
      };
    }

    if (options.patch) {
      this.patch = (model) => {
        return apiProvider.patch(options.url, model);
      };
    }

    if (options.remove) {
      this.remove = (id) => {
        return apiProvider.remove(options.url, id);
      };
    }
  }
}
