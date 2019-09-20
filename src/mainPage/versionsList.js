import React from 'react';
import VersionItem from './versionItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
  link: {
    color: '#2196f3',
    margin: theme.spacing(1),
    '&:hover': {
        color: '#0d47a1',
        margin: theme.spacing(1),
    },
  },
}));

export default function VersionsList(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  
  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  function handleClose() {
    setOpen(false);
  }

  let versionItemList = props.data.versions.map(element => {
    return (
      <VersionItem key={element.id} version={element}/>
    )
  })

  return (
    
    <div>
      <Typography>
        <Link className ={classes.link} onClick={handleClickOpen('body')} underline="none">
            {props.versionText}
        </Link>
        <Typography display="inline">
            |
        </Typography>
        <Link className ={classes.link} href="#" underline="none">
            Add
        </Link>
      </Typography>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="title">{props.data.name} ({props.data.id})</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText>
            {versionItemList}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary">
            Add Variations
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
