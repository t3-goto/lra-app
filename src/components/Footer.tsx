import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Bookmarks from '@material-ui/icons/Bookmarks';
import Settings from '@material-ui/icons/Settings';
import Search from '@material-ui/icons/Search';

import clsx from 'clsx';

/**
 * Styles.
 */
const useStyles = makeStyles({
  root: {
    width: '100%',
    // height: '80px',
  },
});

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
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={clsx(className, classes.root)}
    >
      <BottomNavigationAction label='Search' icon={<Search />} />
      <BottomNavigationAction label='Bookmarks' icon={<Bookmarks />} />
      <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
      <BottomNavigationAction label='Settings' icon={<Settings />} />
    </BottomNavigation>
  );
};

export default Component;
