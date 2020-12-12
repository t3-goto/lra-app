import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

/**
 * Styles.
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    forgotPasswordLink: {
      textAlign: 'center',
      fontFamily: 'Josefin Sans',
      fontSize: '16px',
      fontStyle: 'normal',
      color: '#fff',
      // borderBottom: 'solid 1px #FFF',
    },
    link: {
      color: '#FF7F50',
    },
  })
);

/**
 * IProps.
 */
interface IProps {
  className?: string;
}

/**
 * Presentational Component.
 */
const Component: React.FC<IProps> = (props) => {
  const { className } = props;
  const classes = useStyles();
  return (
    <span className={className}>
      <p className={classes.forgotPasswordLink}>
        <span className={classes.link}>Forgot</span> Password?
      </p>
    </span>
  );
};

export default Component;
