import { PositionInfo } from '../interfaces/PositionInfo';

/**
 * Action Type Constants.
 */
export const REQUEST_GEOLOCATION = 'REQUEST_GEOLOCATION';
export const SUCCESS_GEOLOCATION = 'SUCCESS_GEOLOCATION';
export const FAILURE_GEOLOCATION = 'FAILURE_GEOLOCATION';
export const FINISH_GEOLOCATION = 'FINISH_GEOLOCATION';

/**
 * Action Creators: Request Geolocation.
 */
export const requestGeolocation = () => {
  return {
    type: REQUEST_GEOLOCATION as typeof REQUEST_GEOLOCATION,
  };
};

/**
 * Action Creators: Success Geolocation.
 */
export const successGeolocation = (payload: PositionInfo) => {
  return {
    type: SUCCESS_GEOLOCATION as typeof SUCCESS_GEOLOCATION,
    payload,
  };
};

/**
 * Action Creators: Failure Geolocation.
 */
export const failureGeolocation = (payload: string) => {
  return {
    type: FAILURE_GEOLOCATION as typeof FAILURE_GEOLOCATION,
    payload,
  };
};

/**
 * Action Creators: Finish Geolocation.
 */
export const finishGeolocation = () => {
  return {
    type: FINISH_GEOLOCATION as typeof FINISH_GEOLOCATION,
  };
};

/**
 * Action Creater Types
 */
export type GeolocationActionCreators = {
  requestGeolocation: typeof requestGeolocation;
  successGeolocation: typeof successGeolocation;
  failureGeolocation: typeof failureGeolocation;
  finishGeolocation: typeof finishGeolocation;
};

/**
 * Action Types.
 */
export type GeolocationAction = ReturnType<
  | typeof requestGeolocation
  | typeof successGeolocation
  | typeof failureGeolocation
  | typeof finishGeolocation
>;
