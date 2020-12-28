import { call, put, take, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { apiRestaurants } from '../services/api/restaurant';
import {
  REQUEST_RESTAURANT,
  successRestaurant,
  failureRestaurant,
  updateSearchRestaurants,
} from '../actions';
import { RootState } from '../reducers';
import { Restaurant } from '../interfaces/Restaurant';

/**
 * Handle The Action Type of REQUEST_RESTAURANT.
 */
export function* handleRequestRestaurant() {
  while (true) {
    yield take(REQUEST_RESTAURANT);
    const state: RootState = yield select();
    const data = {
      latitude: state.geolocation.latitude,
      longitude: state.geolocation.longitude,
      // latitude: 35.6869,
      // longitude: 139.7494,
    };

    const { payload, error } = yield call(apiRestaurants.getAllByQuery, data);
    if (!payload && error) {
      yield put(failureRestaurant(error.message));
    } else {
      yield put(successRestaurant(payload.data.rest));
      const restDataArray = payload.data.rest;
      const restaurants = restDataArray
        .map(
          (restData: {
            image_url: { shop_image1: string };
            name: string;
            category: string;
            budget: number;
          }) => {
            const restaurant: Restaurant = {
              img: restData.image_url.shop_image1,
              title: restData.name,
              genre: restData.category,
              budget: restData.budget,
              cols: 1,
            };
            return restaurant;
          }
        )
        .filter((restaurant: Restaurant) => {
          return !!restaurant.img;
        });
      yield put(updateSearchRestaurants(restaurants));
    }
  }
}
