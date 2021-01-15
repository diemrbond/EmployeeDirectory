import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  root: {
    color: "black",
    height: 200,
  },
});

export default function LoadingBox() {
  const classes = useStyles();

  return (
      <>
    <div className={classes.root} style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center" }}>
        <CircularProgress />
    </div>
    <div className={classes.text} style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
        <br/>
        Loading Employees
    </div>
    </>
  );
}