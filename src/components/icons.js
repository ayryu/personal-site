import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Collapse from '@material-ui/core/Collapse';
import Resume from './resume';

const useStyles = makeStyles((theme) => ({
    button: {
      width: 60,
      height: 60,
    },
    collapse: {
      alignSelf: 'center',
      width: '80%',
      paddingTop: theme.spacing(2),
      },
    links: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: 'auto'
    },
    media: {
      // height: 0, paddingTop: '100%', paddingBottom: '45%' for perfect visibility if collapse width: '80%'
      height: 0,
      paddingTop: '100%',
      paddingBottom: '45%',
    },
}));

const Icons = () => {
    const classes = useStyles();
    const [ resumePanel, setResumePanel] = useState(false);
    const [ resumeView, setResumeView ] = useState(false);
        
      const handleResumeOpen = () => {
        setResumePanel((prev) => !prev);
      };

      const toggleResumeView = (event) => {
          event.preventDefault();
          setResumeView(view => !view);
      }


    const collapseInfo = [
        {
            id: 1,
            in: resumePanel,
            image: resumeView
            ?  '/static/images/pics/lightresume.png' : '/static/images/pics/darkresume.png',
        },
    ]

    const icons = [
        {
            title: 'Resume',
            id: 'RESUME',
            clickHandler: handleResumeOpen,
        },
        {
            title: 'ayryu@uwaterloo.ca',
            id: 'EMAIL',
            clickHandler: event => window.location.href='mailto:ayryu@uwaterloo.ca',
        },
        {
            title: 'Github',
            id: 'GITHUB',
            clickHandler: event => window.open('https://github.com/ayryu', '_blank'),
        },
        {
            title: 'LinkedIn',
            id: 'LINKEDIN',
            clickHandler: event => window.open('https://www.linkedin.com/in/alexander-ryu/', '_blank'),
        },
    ]

    const getIcon = (icon) => {
        switch(icon) {
            case 'RESUME':
                return(<AssignmentIndOutlinedIcon 
                    style={{width: 60, height: 60,}} 
                     />); 
            case 'EMAIL':
                return(<MailOutlineIcon 
                    style={{width: 60, height: 60,}} 
                    aria-label='Email'
                    />);      
            case 'GITHUB':
                return(<GitHubIcon 
                    style={{width: 60, height: 60,}} 
                    aria-label='Github'
                    />);                  
            default:
                return(<LinkedInIcon 
                    style={{width: 60, height: 60,}} 
                    aria-label='LinkedIn' 
                    />);
        }
    }

    return (
        <>
            {collapseInfo.map(element => 
                <Collapse key={element.id} className={classes.collapse} in={element.in} timeout='auto' unmountOnExit>
                    <Resume 
                        resume={element}
                        media={classes.media}
                        viewState={resumeView} 
                        toggleView={toggleResumeView}
                        handleCollapse={handleResumeOpen}
                    />  
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a style={{ marginRight: 10 }} href='/static/resume/darkresume.pdf' download>Download Resume (Dark Mode)</a>
                        <a href='/static/resume/lightresume.pdf' download>Download Resume (Light Mode)</a>
                    </div>
                </Collapse>
            )}


            <Grid container className={classes.links} background="#000" spacing={0}>
                {icons.map(icon =>
                    <Grid item key={icon.id}>
                        <IconButton onClick={icon.clickHandler}>
                            <Tooltip title={icon.title} arrow>
                                {getIcon(icon.id)}
                            </Tooltip>
                        </IconButton>
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default Icons;