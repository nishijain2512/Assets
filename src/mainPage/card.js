import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import adobeImage from '../assests/images/140x140.png';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    width: 275,
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    display: 'inline',
  },
  cardContent: {
    backgroundColor: '#e0e0e0'
  },
  assetName: {
      fontWeight: 'bold',
  },
  link: {
    color: '#2196f3',
    marginRight: theme.spacing(1),
  },
  media: {
    height: 200,
  },
}));

export default function CardDisplay(props) {
    const classes = useStyles();
    console.log('INSIDE Card: ' + props.assetItem);

    let calcVersion = props.assetItem.versions.length;
    let versionText = null;

    if (calcVersion === 1) {
        versionText = calcVersion + ' Version';
    }else {
        versionText = calcVersion + ' Versions';
    }

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={adobeImage}
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="subtitle2" component="h2" className={classes.assetName}>
              {props.assetItem.name}
            </Typography>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="body2" display="inline" align="left">
                ID: {props.assetItem.id}
                </Typography>
                <Typography variant="body2" display="inline" align="right">
                Client: {props.assetItem.client}
                </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" component="p">
              Store: {props.assetItem.store}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Asset Type: {props.assetItem.type}
            </Typography>
            <Box display="flex" justifyContent="center">
                <Typography className ={classes.link} variant="h6" display="inline">
                    {versionText} 
                </Typography>
                <Typography className ={classes.link} variant="h6" display="inline" align="center">
                    | Add
                </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }