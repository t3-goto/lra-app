import { Reducer } from 'redux';
import {
  REQUEST_RESTAURANT,
  SUCCESS_RESTAURANT,
  FAILURE_RESTAURANT,
  REQUEST_SEARCH,
  SUCCESS_SEARCH,
  FAILURE_SEARCH,
  UPDATE_SEARCH_TEXT,
  UPDATE_SEARCH_RESTAURANTS,
  RECREATE_SEARCH_RESTAURANTS,
  RestaurantAction as Action,
} from '../actions';
import { Restaurant } from '../interfaces/Restaurant';

/**
 * IState Search Info.
 */
export interface SearchInfo {
  restaurants: Restaurant[];
  searchText: string;
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
  searchText: '',
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
    case REQUEST_SEARCH: {
      return {
        ...state,
      };
    }
    case SUCCESS_SEARCH: {
      return {
        ...state,
        isRestaurant: true,
        errorInfo: '',
        apiRestaurantsData: action.payload,
      };
    }
    case FAILURE_SEARCH: {
      return {
        ...state,
        isRestaurant: false,
        errorInfo: action.payload,
      };
    }
    case UPDATE_SEARCH_TEXT: {
      return {
        ...state,
        searchInfo: { ...state.searchInfo, searchText: action.payload },
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
    case RECREATE_SEARCH_RESTAURANTS: {
      return {
        ...state,
        searchInfo: {
          ...state.searchInfo,
          restaurants: [...action.payload],
        },
      };
    }
    default: {
      const _: never = action;
      return state;
    }
  }
};
