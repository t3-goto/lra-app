/**
 * Action Types.
 */
export const REQUEST_GEOLOCATION = 'REQUEST_GEOLOCATION';
export const SUCCESS_GEOLOCATION = 'SUCCESS_GEOLOCATION';
export const FAILURE_GEOLOCATION = 'FAILURE_GEOLOCATION';
export const FINISH_GEOLOCATION = 'FINISH_GEOLOCATION';

/**
 * Action Creators.
 */
// Request Geolocation.
export const requestGeolocation = () => {
  return {
    type: REQUEST_GEOLOCATION as typeof REQUEST_GEOLOCATION,
  };
};

// Success Geolocation.
export const successGeolocation = (payload: {
  latitude: number;
  longitude: number;
  accuracy: number;
}) => {
  return {
    type: SUCCESS_GEOLOCATION as typeof SUCCESS_GEOLOCATION,
    payload,
  };
};

// Failure Geolocation.
export const failureGeolocation = (payload: string) => {
  return {
    type: FAILURE_GEOLOCATION as typeof FAILURE_GEOLOCATION,
    payload,
  };
};

// Finish Geolocation.
export const finishGeolocation = () => {
  return {
    type: FINISH_GEOLOCATION as typeof FINISH_GEOLOCATION,
  };
};
