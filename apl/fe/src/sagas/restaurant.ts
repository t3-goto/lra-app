import { call, put, take, select } from 'redux-saga/effects';
import {
  REQUEST_RESTAURANT,
  REQUEST_SEARCH,
  successRestaurant,
  failureRestaurant,
  successSearch,
  failureSearch,
  updateSearchRestaurants,
  recreateSearchRestaurants,
} from '../actions';
import { RootState } from '../reducers';
import {
  Restaurant,
  GetRestaurantsApiRequestSchema,
  GetRestaurantsApiResponseSchema,
} from '../interfaces';
import { restaurantsHttpClient } from '../services/http-cliient';

/**
 * Handle The Action Type of REQUEST_RESTAURANT.
 */
export function* handleRequestRestaurant() {
  while (true) {
    yield take(REQUEST_RESTAURANT);
    const { latitude, longitude } = ((yield select()) as RootState).geolocation;
    const getRestaurantsApiRequestSchema: GetRestaurantsApiRequestSchema = {
      latitude,
      longitude,
    };
    type returnType = {
      payload: GetRestaurantsApiResponseSchema;
      error: any;
    };
    const { payload, error }: returnType = yield call(
      restaurantsHttpClient.getAllByQuery,
      getRestaurantsApiRequestSchema
    );
    if (!payload && error) {
      yield put(failureRestaurant(error.message));
    } else {
      yield put(successRestaurant(payload.restaurants));
      const restDataArray = payload.restaurants;
      const restaurants = restDataArray
        .map((restData) => {
          const restaurant: Restaurant = {
            img: restData.shopImage1,
            title: restData.name,
            genre: restData.category,
            budget: restData.budget,
            cols: 1,
          };
          return restaurant;
        })
        .filter((restaurant: Restaurant) => {
          return !!restaurant.img;
        });
      yield put(updateSearchRestaurants(restaurants));
    }
  }
}

/**
 * Handle The Action Type of REQUEST_SEARCH.
 */
export function* handleRequestSearch() {
  while (true) {
    yield take(REQUEST_SEARCH);
    const address = ((yield select()) as RootState).restaurant.searchInfo
      .searchText;
    const getRestaurantsApiRequestSchema: GetRestaurantsApiRequestSchema = {
      address,
    };
    type returnType = {
      payload: GetRestaurantsApiResponseSchema;
      error: any;
    };
    const { payload, error }: returnType = yield call(
      restaurantsHttpClient.getAllByQuery,
      getRestaurantsApiRequestSchema
    );

    if (!payload && error) {
      yield put(failureSearch(error.message));
    } else {
      yield put(successSearch(payload.restaurants));
      const restDataArray = payload.restaurants;
      const restaurants = restDataArray
        .map((restData) => {
          const restaurant: Restaurant = {
            img: restData.shopImage1,
            title: restData.name,
            genre: restData.category,
            budget: restData.budget,
            cols: 1,
          };
          return restaurant;
        })
        .filter((restaurant: Restaurant) => {
          return !!restaurant.img;
        });
      yield put(recreateSearchRestaurants(restaurants));
    }
  }
}
