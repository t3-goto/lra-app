import { Reducer } from 'redux';
import {
  SUCCESS_GEOLOCATION,
  FAILURE_GEOLOCATION,
  successGeolocation,
  failureGeolocation,
} from '../actions';

/**
 * Action Type.
 */
type Action = ReturnType<typeof successGeolocation | typeof failureGeolocation>;

/**
 * IState Geolocation State.
 */
export interface GeolocationState {
  isGeolocation: boolean;
  errorInfo: string;
  latitude: number;
  longitude: number;
  accuracy: number;
}

/**
 * Initial State Geolocation State.
 */
const initialState: GeolocationState = {
  isGeolocation: false,
  errorInfo: '',
  latitude: 0,
  longitude: 0,
  accuracy: 0,
};

/**
 * Auth Reducer.
 */
export const geolocationReducer: Reducer<GeolocationState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SUCCESS_GEOLOCATION: {
      return {
        ...state,
        isGeolocation: true,
        errorInfo: '',
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        accuracy: action.payload.accuracy,
      };
    }
    case FAILURE_GEOLOCATION: {
      return {
        ...state,
        isGeolocation: false,
        errorInfo: action.payload,
      };
    }
    default: {
      const _: never = action;
      return state;
    }
  }
};
