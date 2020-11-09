import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Facebook from '@material-ui/icons/Facebook';

/**
 * Styles.
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginFacebookButton: {
      textAlign: 'center',
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
      <IconButton className={classes.loginFacebookButton}>
        <Facebook color='primary' />
      </IconButton>
    </span>
  );
};

export default Component;
