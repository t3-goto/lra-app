import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { requestGeolocation } from '../actions';
import { RootState } from '../reducers';
import Top from '../components/Top';

/**
 * Action Creater Types
 */
export type ActionCreators = {
  requestGeolocation: typeof requestGeolocation;
};

/**
 * Action Type
 */
type Action = ReturnType<typeof requestGeolocation>;

/**
 * Map Dispatch to Props.
 */
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    requestGeolocation: () => dispatch(requestGeolocation()),
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
export default connect(mapStateToProps, mapDispatchToProps)(Top);
