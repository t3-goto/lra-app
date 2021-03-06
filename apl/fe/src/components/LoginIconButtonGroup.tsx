import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

import LoginTwitterButton from './LoginTwitterButton';
import LoginFacebookButton from './LoginFacebookButton';

/**
 * Styles.
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
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
    <div className={clsx(className, classes.root)}>
      <LoginTwitterButton />
      <LoginFacebookButton />
    </div>
  );
};

export default Component;
