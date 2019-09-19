import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Home from '@material-ui/icons/Home';
import Dashboard from '@material-ui/icons/Dashboard';
import Assessment from '@material-ui/icons/Assessment';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PermMedia from '@material-ui/icons/PermMedia';
import BugReport from '@material-ui/icons/BugReport';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Settings from '@material-ui/icons/Settings';
import Class from '@material-ui/icons/Class';
import Store from '@material-ui/icons/Store';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function SideNav(props) {
  const classes = useStyles();

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation" >
      <List>
          <ListSubheader>Menu</ListSubheader>
          <ListItem button onClick={() => console.log('HOME clicked') }>
              <ListItemIcon><Home /></ListItemIcon>
              <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => console.log('PRODUCTS clicked')}>
              <ListItemIcon><Dashboard /></ListItemIcon>
              <ListItemText primary="Products" />
              
          </ListItem>
          <Collapse >
          </Collapse>
          <ListItem button onClick={() => console.log('CLIENTS clicked')}>
            <ListItemIcon><Store /></ListItemIcon>
            <ListItemText primary="Clients" />
            
          </ListItem>
          <Collapse></Collapse>
          <ListItem button onClick={() => console.log('REPORTS clicked') }>
            <ListItemIcon><Assessment /></ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
          <Collapse></Collapse>
          <ListItem button onClick={() => console.log('SUPPLIERS clicked') }>
            <ListItemIcon><LocalShippingIcon /></ListItemIcon>
            <ListItemText primary="Suppliers" />
          </ListItem>
          <ListItem button onClick={() => console.log('ASSETS clicked') }>
            <ListItemIcon><PermMedia /></ListItemIcon>
            <ListItemText primary="Assets" />
          </ListItem>
          <Collapse></Collapse>
          <ListItem button onClick={() => console.log('TICKETS clicked') }>
            <ListItemIcon><BugReport /></ListItemIcon>
            <ListItemText primary="Tickets" />
          </ListItem>
          <ListItem button onClick={() => console.log('USERS clicked') }>
            <ListItemIcon><SupervisorAccountIcon /></ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button onClick={() => console.log('SYSTEM clicked') }>
            <ListItemIcon><Settings /></ListItemIcon>
            <ListItemText primary="System" />
          </ListItem>
          <ListItem button onClick={() => console.log('DOCUMENTATION clicked') }>
            <ListItemIcon><Class /></ListItemIcon>
            <ListItemText primary="Documentation" />
          </ListItem>
        </List>
    </div>
  );

  return (
    <div>
      <Drawer open={props.isSideNavOpen} onClose={props.onClickingMenu}>
        {sideList('left')}
        <Grid>
            <Typography display="inline" align="left" variant="subtitle1">Current Progress</Typography>
            
            <Slider
              value={60}
              valueLabelDisplay="on"
              orientation="horizontal" />
        </Grid>

      </Drawer>
    </div>
  );
}

