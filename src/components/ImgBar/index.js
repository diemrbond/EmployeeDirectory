import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import employees from './employees.svg';
// Image used from paid thinkstock/istock library
import Hidden from '@material-ui/core/Hidden';
import SearchBar from '../SearchBar';

const useStyles = makeStyles({
  root: {
    background: "#B8B8B8",
    color: "white",
    height: 70,
  },
  image: {
    top: -120,
    position: 'relative'
  },
});

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{display: "flex", justifyContent: "flex-end", alignItems: "right" }}>
        <SearchBar />
        <Hidden xsDown><img className={classes.image} src={employees} alt="Employees" height="200" display={{ xs: 'block', md: 'none' }}/></Hidden>
    </div>
  );
}