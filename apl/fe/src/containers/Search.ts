import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { requestRestaurant, RestaurantAction as Action } from '../actions';
import { RootState } from '../reducers';
import Component from '../components/Search';

/**
 * Map Dispatch to Props.
 */
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    requestRestaurant: () => dispatch(requestRestaurant()),
  };
};

/**
 * Map State to Props.
 */
function mapStateToProps(rootState: RootState) {
  return { ...rootState };
}

/**
 * Connect Presentational Component.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Component);
