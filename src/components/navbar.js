import React, { useState } from 'react';
import About from './about';
import Project from '../components/project';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';


const projects = [
    {  
      name: 'Bekan',
      link: 'https://bekan.herokuapp.com',
      github: 'gh1',
      description: 'description1',
      image: ''
    }, 
    {  
      name: 'Kezuru',
      link: 'https://github.com/ayryu/Kezuru',
      github: 'gh2',
      description: 'description2',
      image: ''
    },
    {  
      name: 'Pokemon Battle Data',
      link: 'https://github.com/ayryu/PBD',
      github: 'gh1',
      description: 'description1',
      image: ''
    }, 
    {  
      name: 'Smash Tournament Winner',
      link: 'https://github.com/ayryu/TourneyW',
      github: 'gh2',
      description: 'description2',
      image: ''
    }
  ]

  function TabPanel({ children, value, index, ...other }) {
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
              {children}
          </Box>
        )}
      </div>
    );
  }

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        height: '100vh',
    },
    bar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    toolbar: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    tabs: {
      // height: '100vh',
      background: "#000"
    },
});

const NavBar = () => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <div className={classes.root}>
            <AppBar className={classes.bar} position='static'>
                <Toolbar className={classes.toolbar}>
                    
                <Tabs 
                value={value} 
                onChange={handleChange} 
                aria-label="Menu Tabs"
                TabIndicatorProps={{style: {backgroundColor: "#20B2AA"}}}>
                    <Tab label="About Life" />
                    <Tab label="Projects" />
                </Tabs>

                </Toolbar>
            </AppBar>

            <TabPanel className={classes.tabs} value={value} index={0}>
              <About/>
            </TabPanel>


            <TabPanel className={classes.tabs} value={value} index={1}>
                <Grid container spacing={1}>  
                    {projects.map(project => 
                        <Grid item xs={12} >
                            <Project project={project}/>
                        </Grid>
                    )}
                </Grid>
            </TabPanel>
        </div>


    )
}

export default NavBar;