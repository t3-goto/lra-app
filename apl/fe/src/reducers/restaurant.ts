import { Reducer } from 'redux';
import {
  REQUEST_RESTAURANT,
  SUCCESS_RESTAURANT,
  FAILURE_RESTAURANT,
  UPDATE_SEARCH_RESTAURANTS,
  RestaurantAction as Action,
} from '../actions';
import { Restaurant } from '../interfaces/Restaurant';

/**
 * IState Search Info.
 */
export interface SearchInfo {
  restaurants: Restaurant[];
}

/**
 * IState Restaurant State.
 */
export interface RestaurantState {
  isRestaurant: boolean;
  errorInfo: string;
  apiRestaurantsData: any[];
  searchInfo: SearchInfo;
}

/**
 * Initial State Search Info.
 */
const initialSearchInfo: SearchInfo = {
  restaurants: [],
};

/**
 * Initial State Restaurant State.
 */
const initialState: RestaurantState = {
  isRestaurant: false,
  errorInfo: '',
  apiRestaurantsData: [],
  searchInfo: initialSearchInfo,
};

/**
 * Auth Reducer.
 */
export const restaurantReducer: Reducer<RestaurantState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case REQUEST_RESTAURANT: {
      return {
        ...state,
      };
    }
    case SUCCESS_RESTAURANT: {
      return {
        ...state,
        isRestaurant: true,
        errorInfo: '',
        apiRestaurantsData: action.payload,
      };
    }
    case FAILURE_RESTAURANT: {
      return {
        ...state,
        isRestaurant: false,
        errorInfo: action.payload,
      };
    }
    case UPDATE_SEARCH_RESTAURANTS: {
      return {
        ...state,
        searchInfo: {
          ...state.searchInfo,
          restaurants: [...state.searchInfo.restaurants, ...action.payload],
        },
      };
    }

    default: {
      const _: never = action;
      return state;
    }
  }
};
