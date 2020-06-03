import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
      links: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 'auto'
      },
      collapse: {
        alignSelf: 'center',
        width: '80%',
        paddingTop: theme.spacing(2),
      },
      media: {
        // height: 0, paddingTop: '100%', paddingBottom: '45%' for perfect visibility if collapse width: '80%'
        height: 0,
        paddingTop: '100%',
        paddingBottom: '45%'
      },
}));

const Links = () => {
    const classes = useStyles();
    const [ skillsPanel, setSkillsPanel] = useState(false);
    const [ resumePanel, setResumePanel] = useState(false);

    const handleSkillsChange = () => {
        setSkillsPanel((prev) => !prev);
        setResumePanel(false);
      };
    
      const handleResumeChange = () => {
        setResumePanel((prev) => !prev);
        setSkillsPanel(false);
      };

    const iconInfo = [
        {
            title: 'Skills',
            icon: 'SKILLS',
            clickAction: handleSkillsChange,
        },
        {
            title: 'Resume',
            icon: 'RESUME',
            clickAction: handleResumeChange,
        },
        {
            title: 'lifedisassembler@gmail.com',
            icon: 'EMAIL',
            clickAction: event => window.location.href='mailto:lifedisassembler@gmail.com',
        },
        {
            title: 'Github',
            icon: 'GITHUB',
            clickAction: event => window.location.href='https://github.com/ayryu',
        },
        {
            title: 'LinkedIn',
            icon: 'LINKEDIN',
            clickAction: event => window.location.href='https://www.linkedin.com/in/alexander-ryu/',
        },
    ]

    const getIcon = (icon) => {
        switch(icon) {
            case 'SKILLS':
                return(<BeenhereIcon 
                    fontSize='large'
                    onClick={handleSkillsChange} />);
            case 'RESUME':
                return(<AssignmentIndOutlinedIcon 
                    fontSize='large'
                    onClick={handleResumeChange} />); 
            case 'EMAIL':
                return(<MailOutlineIcon 
                    fontSize='large' 
                    aria-label='Email'
                    onClick={event => window.location.href='mailto:lifedisassembler@gmail.com'}/>);      
            case 'GITHUB':
                return(<GitHubIcon 
                    fontSize='large' 
                    aria-label='Github'
                    onClick={event => window.location.href='https://github.com/ayryu'}
                    />);                  
            default:
                return(<LinkedInIcon 
                    fontSize='large'
                    aria-label='LinkedIn' 
                    onClick={event => window.location.href='https://www.linkedin.com/in/alexander-ryu/'}/>);
        }
    }

    return (
        <>
            <Collapse className={classes.collapse} in={skillsPanel} timeout='auto' unmountOnExit>
                    <Card>
                        <CardMedia 
                        className={classes.media}
                        image='/static/images/pics/resume.png'/>
                    </Card>
            </Collapse>

            <Collapse className={classes.collapse} in={resumePanel} timeout='auto' unmountOnExit>
                    <Card>
                        <CardMedia 
                        className={classes.media}
                        image='/static/images/pics/resume.png'/>
                    </Card>
            </Collapse>

        <Grid container className={classes.links} background="#000" spacing={0}> 

            <Grid item>
                <IconButton>
                    <Tooltip title='Skills' arrow>
                        <BeenhereIcon 
                            fontSize='large'
                            onClick={handleSkillsChange} />
                    </Tooltip>
                </IconButton>
            </Grid>
            
            <Grid item >
                <IconButton>
                    <Tooltip title='Resume' arrow>
                        <AssignmentIndOutlinedIcon 
                            fontSize='large'
                            onClick={handleResumeChange} />
                    </Tooltip>
                </IconButton>
            </Grid>

            <Grid item>
                <IconButton>
                    <Tooltip title='lifedisassembler@gmail.com' arrow>
                        <MailOutlineIcon 
                        fontSize='large' 
                        aria-label='Email'
                        onClick={event => window.location.href='mailto:lifedisassembler@gmail.com'}/>
                    </Tooltip>
                </IconButton>
            </Grid>
            
            <Grid item>
                <IconButton>
                    <Tooltip title='Github' arrow>
                        <GitHubIcon 
                        fontSize='large' 
                        aria-label='Github'
                        onClick={event => window.location.href='https://github.com/ayryu'}
                        />
                    </Tooltip>
                </IconButton>
            </Grid>

            <Grid item>
                <IconButton>
                    <Tooltip title='LinkedIn' arrow>
                        <LinkedInIcon 
                        fontSize='large'
                        aria-label='LinkedIn' 
                        onClick={event => window.location.href='https://www.linkedin.com/in/alexander-ryu/'}/>
                    </Tooltip>
                </IconButton>
            </Grid>

        </Grid>
    </>
    )
}

export default Links;