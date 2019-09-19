import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import logoImage from '../assests/images/logo_cic.png';
import avatarImage from '../assests/images/avatar.png';

//#017dc3

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    margin: 10,
  },
}));

export default function TopNav (props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <img edge="start" src={logoImage} alt="logo"/>
          <IconButton className={classes.menuButton} onClick={props.onClickingMenu} color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" align="center" className={classes.title} noWrap>
            Assets Management
          </Typography>
          <Button color="inherit" onClick={()=> console.log('TopNav Add button clicked')}>Add</Button>
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <Avatar alt="Remy Sharp" src={avatarImage} className={classes.avatar} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}