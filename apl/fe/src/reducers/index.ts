import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { authReducer, AuthState } from './auth';
import { geolocationReducer, GeolocationState } from './geolocation';
import { restaurantReducer, RestaurantState } from './restaurant';

/**
 * Root State.
 */
export type RootState = {
  router: RouterState;
  auth: AuthState;
  geolocation: GeolocationState;
  restaurant: RestaurantState;
};

/**
 * Root Reducer.
 */
export const rootReducer = (history: History<unknown>) =>
  combineReducers<RootState>({
    router: connectRouter(history),
    auth: authReducer,
    geolocation: geolocationReducer,
    restaurant: restaurantReducer,
  });
