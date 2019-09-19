import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import adobeImage from '../assests/images/140x140.png';

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
  link: {
    color: '#2196f3',
    justifySelf: 'right',
  },
  media: {
    height: 200,
  },
}));

export default function CardDisplay(props) {
    const classes = useStyles();
    console.log('INSIDE Card: ' + props.assetItem);
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={adobeImage}
            //title="Contemplative Reptile"
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="subtitle2" component="h2">
              {props.assetItem.name}
            </Typography>
            <Typography variant="body2" display="inline">
              ID: {props.assetItem.id}
            </Typography>
            <Typography variant="body2" display="inline">
              Client: {props.assetItem.client}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Store: {props.assetItem.store}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Asset Type: {props.assetItem.type}
            </Typography>
            <Typography className ={classes.link} variant="h6" display="inline" align="center">
              Version | Add
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }