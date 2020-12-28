import { Restaurant } from '../interfaces/Restaurant';

/**
 * Action Type Constants.
 */
export const REQUEST_RESTAURANT = 'REQUEST_RESTAURANT';
export const SUCCESS_RESTAURANT = 'SUCCESS_RESTAURANT';
export const FAILURE_RESTAURANT = 'FAILURE_RESTAURANT';
export const UPDATE_SEARCH_RESTAURANTS = 'UPDATE_SEARCH_RESTAURANTS';

/**
 * Action Creators: Request Restaurant.
 */
export const requestRestaurant = () => {
  return {
    type: REQUEST_RESTAURANT as typeof REQUEST_RESTAURANT,
  };
};

/**
 * Action Creators: Success Restaurant.
 */
export const successRestaurant = (payload: any) => {
  return {
    type: SUCCESS_RESTAURANT as typeof SUCCESS_RESTAURANT,
    payload,
  };
};

/**
 * Action Creators: Failure Restaurant.
 */
export const failureRestaurant = (payload: string) => {
  return {
    type: FAILURE_RESTAURANT as typeof FAILURE_RESTAURANT,
    payload,
  };
};

/**
 * Action Creators: Update Search Restaurants.
 */
export const updateSearchRestaurants = (payload: Restaurant[]) => {
  return {
    type: UPDATE_SEARCH_RESTAURANTS as typeof UPDATE_SEARCH_RESTAURANTS,
    payload,
  };
};

/**
 * Action Creater Types
 */
export type RestaurantActionCreators = {
  requestRestaurant: typeof requestRestaurant;
  successRestaurant: typeof successRestaurant;
  failureRestaurant: typeof failureRestaurant;
  updateSearchRestaurants: typeof updateSearchRestaurants;
};

/**
 * Action Types.
 */
export type RestaurantAction = ReturnType<
  | typeof requestRestaurant
  | typeof successRestaurant
  | typeof failureRestaurant
  | typeof updateSearchRestaurants
>;
