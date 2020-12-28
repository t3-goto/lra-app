import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  requestSearch,
  updateSearchText,
  RestaurantAction as Action,
} from '../actions';
import { RootState } from '../reducers';
import Component from '../components/Search';

/**
 * Map Dispatch to Props.
 */
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    updateSearchText: (v: string) => dispatch(updateSearchText(v)),
    requestSearch: () => dispatch(requestSearch()),
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
