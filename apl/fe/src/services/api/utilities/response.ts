import logger from 'redux-logger';

// Response handler
export const handleResponse = (response: any): { payload: any } => {
  if (response.results) {
    return { payload: response.results };
  }

  if (response.data) {
    return { payload: response.data };
  }

  return { payload: response };
};

// Error handler
export const handleError = (error: any): { error: any } => {
  if (error.data) {
    return { error: error.data };
  }
  return { error };
};
