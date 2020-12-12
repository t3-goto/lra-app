import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Email from '@material-ui/icons/Email';

/**
 * Styles.
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(0),
    },
    input: {
      textAlign: 'left',
      fontFamily: 'Josefin Sans',
      fontSize: '16px',
      fontStyle: 'normal',
      color: '#fff',
      width: '290px',
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
  const classes = useStyles();
  const { className } = props;

  return (
    <div className={className}>
      <FormControl className={classes.formControl}>
        <Input
          className={classes.input}
          startAdornment={
            <InputAdornment position='start'>
              <Email />
            </InputAdornment>
          }
          placeholder='Email'
        />
      </FormControl>
    </div>
  );
};

export default Component;
