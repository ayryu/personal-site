import React from 'react';
import About from './about';
import Project from '../components/project';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

const projects = [
    {  
      name: 'Bekan',
      link: 'https://bekan.herokuapp.com',
      github: 'gh1',
      description: 'Finding, sharing, and discussing potential solutions to relevant social issues using evidence-based research',
      image: '/static/images/cards/dark-forest.jpg'
    }, 
    {  
      name: 'Kezuru',
      link: 'https://github.com/ayryu/Kezuru',
      github: 'gh2',
      description: 'A repository for learning about technique-driven cooking methods and the ubiquity of their applications',
      image: '/static/images/cards/kezuru.jpeg'
    },
    {  
      name: 'Pokemon Battle Data',
      link: 'https://github.com/ayryu/PBD',
      github: 'gh1',
      description: 'A source for learning about relevant Pokemon stats and teambuilding for the Generation 8 OU metagame',
      image: '/static/images/cards/pbd.png'
    }, 
    {  
      name: 'Smash Tournament Winner',
      link: 'https://github.com/ayryu/TourneyW',
      github: 'gh2',
      description: 'Aggregating frame data for Super Smash Bros. Ultimate characters related to improving movement and frame advantage',
      image: '/static/images/cards/smash.jpg'
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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        fontFamily: `'Work Sans', sans-serif`,
    },
    appbar: {
        display: 'flex',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        width: 'auto',
    },
    tab: {
      fontSize: 26,
      minWidth: 'auto',
      textTransform: "none"
    },
    tabPanels: {
      background: "#000",
      paddingTop: theme.spacing(5),
      fontFamily: `'Work Sans', sans-serif`,
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      backgroundColor: 'transparent',
      width: 'auto',
  },
}));

const NavBar = () => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        setValue(newValue);
      };

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} position='fixed'>
                <Toolbar className={classes.toolbar}>
                    
                <Tabs
                 className={classes.tabs}
                value={value} 
                onChange={handleChange} 
                aria-label="Menu Tabs"
                TabIndicatorProps={{style: {backgroundColor: "#20B2AA"}}}>
                    <Tab className={classes.tab} label="About Alex" />
                    <Tab className={classes.tab} label="Projects" />
                </Tabs>

                </Toolbar>
            </AppBar>

            <TabPanel className={classes.tabPanels} value={value} index={0}>
              <About/>
            </TabPanel>

            <TabPanel className={classes.tabPanels} value={value} index={1}>
                <Grid container spacing={1}>  
                    {projects.map(project => 
                        <Grid key={project.name} item xs={12} >
                            <Project project={project}/>
                        </Grid>
                    )}
                </Grid>
            </TabPanel>
        </div>


    )
}

export default NavBar;