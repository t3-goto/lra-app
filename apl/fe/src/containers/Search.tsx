import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { requestRestaurant } from '../actions';
import { RootState } from '../reducers';
import Search from '../components/Search';

/**
 * Action Creater Types
 */
export type ActionCreators = {
  requestRestaurant: typeof requestRestaurant;
};

/**
 * Action Type
 */
type Action = ReturnType<typeof requestRestaurant>;

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
export default connect(mapStateToProps, mapDispatchToProps)(Search);
