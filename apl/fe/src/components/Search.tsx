import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import RestaurantList from './RestaurantList';
import { RootState } from '../reducers';
import { RestaurantActionCreators as ActionCreators } from '../actions';
import '../assets/styles/Search.scss';

/**
 * Own Props.
 */
type OwnProps = {
  className?: string;
};

/**
 * TProps.
 */
type TProps = OwnProps & RootState & ActionCreators;

/**
 * Presentational Component.
 */
const Component: React.FC<TProps> = (props) => {
  return (
    <div className='search'>
      <Header className='search-header' />
      <RestaurantList
        className='search-restaurant-list'
        tileData={props.restaurant.searchInfo.restaurants}
      />
      <Footer className='search-footer' />
    </div>
  );
};

export default Component;
