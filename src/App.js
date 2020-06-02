import React, { useState } from 'react';
import NavBar from './components/navbar';
import Project from './components/project';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';


const useStyles = makeStyles({
  root: {
    maxHeight: 'auto',
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
    </div>
  );
}

export default App;
