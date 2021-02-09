const wrap = <T>(task: Promise<Response>): Promise<T> => {
  return new Promise((resolve, reject) => {
    task
      .then((response) => {
        if (response.ok) {
          response
            .json()
            .then((json) => {
              resolve(json);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const fetcher = <T = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> => {
  return wrap<T>(fetch(input, init));
};

export type Config = {
  BFF_BASE_URL: string;
  [prop: string]: any;
};

export const config: Config = {
  BFF_BASE_URL: '',
};

export const load = () => {
  return fetcher<Config>('config.json').then((result) => {
    Object.keys(config).forEach((prop) => {
      if (Object.prototype.hasOwnProperty.call(config, prop)) {
        delete config[prop];
      }
    });
    Object.keys(result).forEach((prop) => {
      if (Object.prototype.hasOwnProperty.call(result, prop)) {
        config[prop] = result[prop];
      }
    });
    return config;
  });
};
