import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

/**
 * Styles.
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleLabel: {
      textAlign: 'center',
      fontFamily: 'Josefin Sans',
      fontSize: '24px',
      fontStyle: 'normal',
      color: '#fff',
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
    <div className={className}>
      <h1 className={classes.titleLabel}>Find the Best Restaurant</h1>
    </div>
  );
};

export default Component;
