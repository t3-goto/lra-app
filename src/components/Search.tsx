import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import RestaurantList from './RestaurantList';

import '../assets/styles/Search.scss';

/**
 * IProps.
 */
interface IProps {
  className?: string;
}

/**
 * Presentational Component.
 */
const Component: React.FC<IProps> = () => {
  return (
    <div className='search'>
      <Header className='search-header' />
      {/* <Header /> */}
      <RestaurantList className='search-restaurant-list' />
      <Footer className='search-footer' />
    </div>
  );
};

export default Component;
