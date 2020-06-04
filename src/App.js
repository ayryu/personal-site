import React from 'react';
import NavBar from './components/navbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        Alexander Ryu {''}  
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
      <Copyright style= {{ alignContent: 'flex-end' }}/>
    </div>
  );
}

export default App;
