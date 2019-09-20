import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import DisplayCard from './DisplayCard';
import { GridListTile } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '100%',
    height: 450,
  },
}));

export default function DisplayCardsList(props) {
    const classes = useStyles();

    let asset = props.assetsData.map(object => {
        return (
            <GridListTile key={object.id} height="auto">
                <DisplayCard assetItem={object}/>
            </GridListTile>
        );
    });
  
    return (
      <div className={classes.root}>
        <GridList cellHeight={300} spacing="10" cols={4} className={classes.gridList}>
          {asset}
        </GridList>
      </div>
    );
  }