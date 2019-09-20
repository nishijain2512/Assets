import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 
{ Drawer,
  Container,
  Typography,
  Slider,
  ListSubheader,
  ListItemText,
  ListItemIcon,
  ListItem,
  List } from '@material-ui/core';
import {Home, 
  Dashboard, 
  Assessment, 
  PermMedia,
  BugReport, 
  Settings,
  Class,
  Store} from '@material-ui/icons';
  
import LocalShippingIcon from '@material-ui/icons/LocalShipping';  
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

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

          <ListItem button onClick={() => console.log('CLIENTS clicked')}>
            <ListItemIcon><Store /></ListItemIcon>
            <ListItemText primary="Clients" />
          </ListItem>

          <ListItem button onClick={() => console.log('REPORTS clicked') }>
            <ListItemIcon><Assessment /></ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem button onClick={() => console.log('SUPPLIERS clicked') }>
            <ListItemIcon><LocalShippingIcon /></ListItemIcon>
            <ListItemText primary="Suppliers" />
          </ListItem>
          <ListItem button onClick={() => console.log('ASSETS clicked') }>
            <ListItemIcon><PermMedia /></ListItemIcon>
            <ListItemText primary="Assets" />
          </ListItem>

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
        <Container>
            <Typography display="inline" align="left" variant="subtitle1">Current Progress</Typography>
            <Slider
              value={60}
              valueLabelDisplay="auto"
              orientation="horizontal" />
        </Container>

      </Drawer>
    </div>
  );
}

