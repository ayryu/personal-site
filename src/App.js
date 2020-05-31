import React, { useState } from 'react';
import NavBar from './components/navbar';
import Project from './components/project';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';


const projects = [
  {  
    name: 'Bekan',
    link: 'link1',
    github: 'gh1',
    description: 'description1',
    image: ''
  }, 
  {  
    name: 'KH',
    link: 'link2',
    github: 'gh2',
    description: 'description2',
    image: ''
  },
  {  
    name: 'Bekan',
    link: 'link1',
    github: 'gh1',
    description: 'description1',
    image: ''
  }, 
  {  
    name: 'KH',
    link: 'link2',
    github: 'gh2',
    description: 'description2',
    image: ''
  }
]

const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  links: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    '& *': {
      display: 'inline-block',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  expand: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  container: {
    display: 'inline',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    
    '& *': {
      // display: 'inline-block',
      flexWrap: 'nowrap',
      // justifyContent: 'center',
      }
  },
  griditem: {
    minWidth: 0,
  },

});

function App() {
  const [ projectlist, setProjectList ] = useState([])
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      {/* <div className={classes.text}>
        <Typography variant="h4" style= {{ fontWeight: 'bolder' }}>
          Lifedisassembler
        </Typography>
      </div> */}

      {/* <div className={classes.links}>
        <Grid container className={classes.container} spacing={0}>
          
            <Grid item xs={6} sm={3}>

              <IconButton>
                <LinkedInIcon  className={classes.griditem}/>
              </IconButton>
            </Grid>

            <Grid item className={classes.griditem} xs={6} sm={3}>
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </Grid>
          
        </Grid> 
      </div> */}

        {/* <Grid container spacing={1}>  
          {projects.map(project => 
            <Grid item xs={12} >
              <Project project={project}/>
            </Grid>
          )}
        </Grid> */}

    </div>
  );
}

export default App;
