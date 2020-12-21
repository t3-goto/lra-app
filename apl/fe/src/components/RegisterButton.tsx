import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

/**
 * Styles.
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginButton: {
      textAlign: 'center',
      fontFamily: 'Josefin Sans',
      fontSize: '16px',
      fontStyle: 'normal',
      color: '#FFF',
      width: '290px',
    },
  })
);

/**
 * IProps.
 */
interface IProps {
  className?: string;
  onClick: any;
}

/**
 * Presentational Component.
 */
const Component: React.FC<IProps> = (props) => {
  const { className } = props;
  const classes = useStyles();
  return (
    <div className={className}>
      <Button
        variant='contained'
        color='primary'
        className={classes.loginButton}
        onClick={(e) => {
          props.onClick();
        }}
      >
        Register
      </Button>
    </div>
  );
};

export default Component;
