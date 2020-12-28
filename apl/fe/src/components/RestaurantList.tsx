import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import clsx from 'clsx';
// import tileData from '../mocks/imgMocks';

/**
 * Styles.
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: '80%',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    gridListTileBar: {
      textAlign: 'left',
      fontFamily: 'Josefin Sans',
      fontSize: '16px',
      fontStyle: 'normal',
    },
  })
);

/**
 * IProps.
 */
interface IProps {
  className?: string;
  tileData: {
    img: string;
    title: string;
    genre: string;
    budget: number;
    cols: number;
  }[];
}

/**
 * Presentational Component.
 */
const Component: React.FC<IProps> = (props) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <div className={clsx(className, classes.root)}>
      <GridList cellHeight={180} className={classes.gridList} cols={2}>
        {props.tileData.map((tile) => (
          <GridListTile key={tile.img} className={classes.gridListTileBar}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={
                <span>
                  <span>{tile.budget} </span> <span>{tile.genre}</span>
                </span>
              }
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Component;
