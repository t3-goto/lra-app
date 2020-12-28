import React from 'react';
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

/**
 * Styles.
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      fontFamily: 'Josefin Sans',
      fontSize: '16px',
      fontStyle: 'normal',
    },
    input: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    grow: {
      flexGrow: 1,
      height: '10%',
    },
  })
);

/**
 * Own Props.
 */
type OwnProps = {
  className?: string;
  window?: () => Window;
  children?: React.ReactElement;
  onClick: any;
  value: string;
  onChange: any;
};

/**
 * TProps.
 */
type TProps = OwnProps;

const HideOnScroll: React.FC<TProps> = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

/**
 * Presentational Component.
 */
const Component: React.FC<TProps> = (props) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <div className={clsx(className, classes.grow)}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position='static'>
          <Toolbar>
            <Paper component='form' className={classes.root}>
              <InputBase
                className={classes.input}
                placeholder='Search Places...'
                inputProps={{ 'aria-label': 'search places...' }}
                value={props.value}
                onChange={(e) => {
                  props.onChange(e.target.value);
                }}
              />
              <IconButton
                className={classes.iconButton}
                aria-label='search'
                onClick={(e) => {
                  props.onClick();
                }}
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};
export default Component;
