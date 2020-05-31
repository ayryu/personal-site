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
    },
    bar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    tabs: {
        flexGrow: 1,
        justifyContent: 'flex-end',
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
                <Toolbar  className={classes.tabs}>
                    
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="About Life" />
                    <Tab label="Projects" />
                </Tabs>

                </Toolbar>
            </AppBar>

            <TabPanel value={value} index={0}>
                    <About />
                </TabPanel>

            <TabPanel value={value} index={1}>
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