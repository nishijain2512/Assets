import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
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
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
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
      <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}


// const drawerWidth = 240;

// const styles = theme => ({
//   drawer: {
//     display: 'flex',
//     width: drawerWidth,
//     flexShrink: 0
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '0 8px',
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// });

// const sideNav = (props) => {

//     // const [open, setOpen] = React.useState(true);

//     // const handleClick = () => {
//     //     setOpen(!open);
//     // }
    
//     return (
//       <div>
//         <Drawer
//           className={classes.drawer}
//           variant="persistent"
//           anchor="left"
//           open={isSideNavOpen}
//           classes={{
//             paper: classes.drawerPaper,
//           }} >
          // <List>
          //   <ListSubheader>Menu</ListSubheader>
          //   <ListItem button onClick={() => console.log('HOME clicked') }>
          //       <ListItemIcon><Home /></ListItemIcon>
          //       <ListItemText primary="Home" />
          //   </ListItem>
          //   <ListItem button onClick={() => console.log('PRODUCTS clicked')}>
          //       <ListItemIcon><Dashboard /></ListItemIcon>
          //       <ListItemText primary="Products" />
          //       {open ? <ExpandLess /> : <ExpandMore />}
          //   </ListItem>
          //   <Collapse in={open} timeout="auto" unmountOnExit>
          //       <List component="div" disablePadding>
          //           <ListItem button className={classes.nested} onClick={() => console.log('New Product clicked')}>
          //               <ListItemText primary="+ New Product" />
          //           </ListItem>
          //           <ListItem button className={classes.nested} onClick={() => console.log('Products clicked')}>
          //               <ListItemText primary="Products" />
          //           </ListItem>
          //       </List>
          //   </Collapse>
          //   <ListItem button onClick={() => console.log('CLIENTS clicked')}>
          //     <ListItemIcon><Store /></ListItemIcon>
          //     <ListItemText primary="Clients" />
          //     {open ? <ExpandLess /> : <ExpandMore />}
          //   </ListItem>
          //   <Collapse></Collapse>
          //   <ListItem button onClick={() => console.log('REPORTS clicked') }>
          //     <ListItemIcon><Assessment /></ListItemIcon>
          //     <ListItemText primary="Reports" />
          //   </ListItem>
          //   <Collapse></Collapse>
          //   <ListItem button onClick={() => console.log('SUPPLIERS clicked') }>
          //     <ListItemIcon><LocalShippingIcon /></ListItemIcon>
          //     <ListItemText primary="Suppliers" />
          //   </ListItem>
          //   <ListItem button onClick={() => console.log('ASSETS clicked') }>
          //     <ListItemIcon><PermMedia /></ListItemIcon>
          //     <ListItemText primary="Assets" />
          //   </ListItem>
          //   <Collapse></Collapse>
          //   <ListItem button onClick={() => console.log('TICKETS clicked') }>
          //     <ListItemIcon><BugReport /></ListItemIcon>
          //     <ListItemText primary="Tickets" />
          //   </ListItem>
          //   <ListItem button onClick={() => console.log('USERS clicked') }>
          //     <ListItemIcon><SupervisorAccountIcon /></ListItemIcon>
          //     <ListItemText primary="Users" />
          //   </ListItem>
          //   <ListItem button onClick={() => console.log('SYSTEM clicked') }>
          //     <ListItemIcon><Settings /></ListItemIcon>
          //     <ListItemText primary="System" />
          //   </ListItem>
          //   <ListItem button onClick={() => console.log('DOCUMENTATION clicked') }>
          //     <ListItemIcon><Class /></ListItemIcon>
          //     <ListItemText primary="Documentation" />
          //   </ListItem>
          // </List>
//         </Drawer>
//       </div>  
//     )
// }

// export default sideNav;