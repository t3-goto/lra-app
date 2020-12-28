import { Reducer } from 'redux';
import {
  REQUEST_GEOLOCATION,
  SUCCESS_GEOLOCATION,
  FAILURE_GEOLOCATION,
  FINISH_GEOLOCATION,
  GeolocationAction as Action,
} from '../actions';

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
    case REQUEST_GEOLOCATION: {
      return {
        ...state,
      };
    }
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
    case FINISH_GEOLOCATION: {
      return {
        ...state,
      };
    }
    default: {
      const _: never = action;
      return state;
    }
  }
};
