import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Lock from '@material-ui/icons/Lock';

// import IconButton from '@material-ui/core/IconButton';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

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
 * IState.
 */
// interface IState {
//   showPassword: boolean;
// }

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

  // const [values, setValues] = React.useState<IState>({
  //   showPassword: false,
  // });

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  // const handleMouseDownPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };

  return (
    <div className={props.className}>
      <FormControl className={classes.formControl}>
        <Input
          type='password'
          className={classes.input}
          placeholder='Password'
          startAdornment={
            <InputAdornment position='start'>
              <Lock />
            </InputAdornment>
          }
          value={props.value}
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
        />
      </FormControl>
      {/* <FormControl className={classes.formControl}>
        <Input
          type={values.showPassword ? 'text' : 'password'}
          className={classes.input}
          placeholder='Password'
          startAdornment={
            <InputAdornment position='start'>
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl> */}
    </div>
  );
};

export default Component;
