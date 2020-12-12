import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Twitter from '@material-ui/icons/Twitter';

/**
 * Styles.
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginTwitterButton: {
      textAlign: 'center',
      borderWidth: '1px',
      borderColor: '#FFF',
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
      <IconButton className={classes.loginTwitterButton}>
        <Twitter color='primary' />
      </IconButton>
    </span>
  );
};

export default Component;
