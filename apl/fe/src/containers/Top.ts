import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { requestGeolocation, GeolocationAction as Action } from '../actions';
import { RootState } from '../reducers';
import Component from '../components/Top';

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
export default connect(mapStateToProps, mapDispatchToProps)(Component);
