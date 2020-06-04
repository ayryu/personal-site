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

const Icons = () => {
    const classes = useStyles();
    // const [ skillsPanel, setSkillsPanel] = useState(false);
    const [ resumePanel, setResumePanel] = useState(false);

    // const handleSkillsChange = () => {
    //     setSkillsPanel((prev) => !prev);
    //     setResumePanel(false);
    //   };
    
      const handleResumeChange = () => {
        setResumePanel((prev) => !prev);
        // setSkillsPanel(false);
      };

    const collapseInfo = [
        // {
        //     in: skillsPanel,
        //     image: '/static/images/pics/resume.png',
        // },
        {
            in: resumePanel,
            image: '/static/images/pics/resume.png',
        },
    ]

    const icons = [
        // {
        //     title: 'Skills',
        //     id: 'SKILLS',
        // },
        {
            title: 'Resume',
            id: 'RESUME',
        },
        {
            title: 'ayryu@uwaterloo.ca',
            id: 'EMAIL',
        },
        {
            title: 'Github',
            id: 'GITHUB',
        },
        {
            title: 'LinkedIn',
            id: 'LINKEDIN',
        },
    ]

    const getIcon = (icon) => {
        switch(icon) {
            // case 'SKILLS':
            //     return(<BeenhereIcon 
            //         fontSize='large'
            //         onClick={handleSkillsChange} />);
            case 'RESUME':
                return(<AssignmentIndOutlinedIcon 
                    fontSize='large'
                    onClick={handleResumeChange} />); 
            case 'EMAIL':
                return(<MailOutlineIcon 
                    fontSize='large' 
                    aria-label='Email'
                    onClick={event => window.location.href='mailto:ayryu@uwaterloo.ca'}/>);      
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
            {collapseInfo.map(element => 
                <Collapse className={classes.collapse} in={element.in} timeout='auto' unmountOnExit>
                    <Card>
                        <CardMedia 
                            className={classes.media}
                            image={element.image}
                        />
                    </Card>
                </Collapse>
            )}

            <Grid container className={classes.links} background="#000" spacing={0}>
                {icons.map(icon =>
                    <Grid item>
                        <IconButton>
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