import * as React from 'react';

/**
 * IProps.
 */
interface IProps {
  className?: string;
}

/**
 * IState
 */
interface ISate {
  hasError?: boolean;
}

class Component extends React.Component<IProps, ISate> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true });
    // errorをapiで飛ばす。
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default Component;
