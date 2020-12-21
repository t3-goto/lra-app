import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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
  onClick: any;
}

/**
 * Presentational Component.
 */
const Component: React.FC<IProps> = (props) => {
  const { className } = props;
  const classes = useStyles();
  return (
    <span className={className}>
      <h1 className={classes.forgotPasswordLink}>
        <Link
          to='/register'
          className={classes.link}
          onClick={(e) => {
            props.onClick();
          }}
        >
          Create
        </Link>{' '}
        New Account?
      </h1>
    </span>
  );
};

export default Component;
