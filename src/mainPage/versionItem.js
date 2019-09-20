import React from 'react';
import cardImage from '../assests/images/140x140.png';
import { makeStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp'; 
import { 
    Card, 
    CardHeader, 
    CardContent, 
    CardActions, 
    Button, 
    Typography, 
    CardMedia,} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    imageBox: {
      width: '50%',
    },
    card: {
        width: '50%',
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        display: 'inline',
      },
    cardContent: {
        backgroundColor: '#e0e0e0'
    },
    button: {
        marginLeft: theme.spacing(1),
        
    },
    assetID: {
        fontWeight: 'bold',
    },
    media: {
        height: 200,
    },
    gridList: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#26c6da',
      },
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
      },
      gridListTile: {
        backgroundColor: '#FFFFFF',
        display: 'inline',
      },
  }));

export default function VersionItem (props) {

    const classes = useStyles();
    const versionID= props.version.id;
    const headerTitle = 'Asset ID' + versionID;

    return (
        <Card className={classes.card}>
                <CardMedia 
                    className={classes.media}
                    image={cardImage}/>
            <CardHeader title={headerTitle}/>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Logo Type: {props.version.logoType}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Resizable: {props.version.isResizable}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Description: {props.version.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Colors: {props.version.isResizable}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" className={classes.button}>
                    Public
                </Button>
                <Button variant="contained" className={classes.button}>
                    <GetAppIcon className={classes.button} />
                    Download
                </Button>
                <Button variant="contained" className={classes.button}>
                    Preview
                </Button>
            </CardActions>
        </Card>
    )
};
