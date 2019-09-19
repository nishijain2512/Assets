import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import DisplayCard from './card';
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
    backgroundColor: '#9ccc65',
  },
}));
export default function DisplayCardsList(props) {
    const classes = useStyles();
    console.log(props.assetsData);

    let asset = props.assetsData.map(object => {
        console.log(object);
        return (
            <GridListTile height="auto">
                <DisplayCard key={object.id} assetItem={object}/>
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

//   {asset.map(element => (
//     <GridListTile>
//         element
//     </GridListTile>
//   ))}