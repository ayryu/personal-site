import React from 'react';
import NavBar from './components/navbar';
import { makeStyles } from '@material-ui/core/styles';

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
