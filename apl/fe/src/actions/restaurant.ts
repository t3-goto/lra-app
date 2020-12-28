import { Restaurant } from '../interfaces/Restaurant';

/**
 * Action Type Constants.
 */
export const REQUEST_RESTAURANT = 'REQUEST_RESTAURANT';
export const SUCCESS_RESTAURANT = 'SUCCESS_RESTAURANT';
export const FAILURE_RESTAURANT = 'FAILURE_RESTAURANT';
export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const SUCCESS_SEARCH = 'SUCCESS_SEARCH';
export const FAILURE_SEARCH = 'FAILURE_SEARCH';
export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
export const UPDATE_SEARCH_RESTAURANTS = 'UPDATE_SEARCH_RESTAURANTS';
export const RECREATE_SEARCH_RESTAURANTS = 'RECREATE_SEARCH_RESTAURANTS';

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
 * Action Creators: Request Search.
 */
export const requestSearch = () => {
  return {
    type: REQUEST_SEARCH as typeof REQUEST_SEARCH,
  };
};

/**
 * Action Creators: Success Search.
 */
export const successSearch = (payload: any) => {
  return {
    type: SUCCESS_SEARCH as typeof SUCCESS_SEARCH,
    payload,
  };
};

/**
 * Action Creators: Failure Search.
 */
export const failureSearch = (payload: string) => {
  return {
    type: FAILURE_SEARCH as typeof FAILURE_SEARCH,
    payload,
  };
};

/**
 * Action Creators: Update Search Text.
 */
export const updateSearchText = (payload: string) => {
  return {
    type: UPDATE_SEARCH_TEXT as typeof UPDATE_SEARCH_TEXT,
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
 * Action Creators: Recreate Search Restaurants.
 */
export const recreateSearchRestaurants = (payload: Restaurant[]) => {
  return {
    type: RECREATE_SEARCH_RESTAURANTS as typeof RECREATE_SEARCH_RESTAURANTS,
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
  requestSearch: typeof requestSearch;
  successSearch: typeof successSearch;
  failureSearch: typeof failureSearch;
  updateSearchText: typeof updateSearchText;
  updateSearchRestaurants: typeof updateSearchRestaurants;
  recreateSearchRestaurants: typeof recreateSearchRestaurants;
};

/**
 * Action Types.
 */
export type RestaurantAction = ReturnType<
  | typeof requestRestaurant
  | typeof successRestaurant
  | typeof failureRestaurant
  | typeof requestSearch
  | typeof successSearch
  | typeof failureSearch
  | typeof updateSearchText
  | typeof updateSearchRestaurants
  | typeof recreateSearchRestaurants
>;
