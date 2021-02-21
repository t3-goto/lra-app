import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Person from '@material-ui/icons/Person';

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
  value: string;
  onChange: any;
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
              <Person />
            </InputAdornment>
          }
          placeholder='Taro'
          value={props.value}
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
        />
      </FormControl>
    </div>
  );
};

export default Component;
