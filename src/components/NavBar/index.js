import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ImgBar from '../ImgBar'

const useStyles = makeStyles({
  root: {
    background: "#1C3664",
    border: 0,
    borderRadius: 0,
    boxShadow: "0",
    color: "white",
    height: 110,
    padding: "0 30px"
  },
  toolbar: {
    minHeight: 80,
    alignItems: 'flex-start',
    paddingTop: 1,
    paddingBottom: 2,
  },
  title: {
    flexGrow: 1,
    paddingLeft: 10,
    marginTop: 60
  },
  icon: {
    fontSize: 35,
    height: 150
  }
});

export default function NavBar(props) {
  const classes = useStyles();

  const [value, setValue] = useState("");

  function handleChange(newValue) {
    setValue(newValue);
    props.onChange(newValue);
  }

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>         
          <AccountCircleIcon className={classes.icon}/> 
          <Typography className={classes.title} variant="h5" noWrap>
          Employee Directory
          </Typography>
        </Toolbar>
      </AppBar>
      <ImgBar value={value} onChange={handleChange}/>
    </div>
  );
}