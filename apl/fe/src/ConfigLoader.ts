import * as React from 'react';
import { load } from './config';

/**
 * Own Props.
 */
type OwnProps = {
  ready?: any;
};

const Component: React.FC<OwnProps> = (props) => {
  const [state, setState] = React.useState({
    isLoaded: false,
    config: {},
  });
  React.useEffect(() => {
    load().then((config) => setState({ isLoaded: true, config }));
  }, []);

  if (!state.isLoaded) {
    return null;
  }

  return props.ready(state.config);
};

export default Component;
