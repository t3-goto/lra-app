import { Restaurant } from '../interfaces/Restaurant';

/**
 * Action Types.
 */
export const REQUEST_RESTAURANT = 'REQUEST_RESTAURANT';
export const SUCCESS_RESTAURANT = 'SUCCESS_RESTAURANT';
export const FAILURE_RESTAURANT = 'FAILURE_RESTAURANT';
export const UPDATE_SEARCH_RESTAURANTS = 'UPDATE_SEARCH_RESTAURANTS';

/**
 * Action Creators.
 */
// Request Restaurant.
export const requestRestaurant = () => {
  return {
    type: REQUEST_RESTAURANT as typeof REQUEST_RESTAURANT,
  };
};

// Success Restaurant.
export const successRestaurant = (payload: any) => {
  return {
    type: SUCCESS_RESTAURANT as typeof SUCCESS_RESTAURANT,
    payload,
  };
};

// Failure Restaurant.
export const failureRestaurant = (payload: string) => {
  return {
    type: FAILURE_RESTAURANT as typeof FAILURE_RESTAURANT,
    payload,
  };
};

// Update Search Restaurants.
export const updateSearchRestaurants = (payload: Restaurant[]) => {
  return {
    type: UPDATE_SEARCH_RESTAURANTS as typeof UPDATE_SEARCH_RESTAURANTS,
    payload,
  };
};
