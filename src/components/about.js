import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        height: '100vh',
    },
    media: {
        height: '100vh',
    },
    text: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      links: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
          '& > *': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
      },
}));

const About = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

    return (
            <Container maxWidth="sm" className={classes.root}>
                <CssBaseline />

                        <Avatar
                        alt='User'
                        src='/static/images/pics/profile.jpg'/>

                        <div className={classes.text}>
                            <Typography variant="h6" style= {{ fontWeight: 'bolder' }}>
                            Hi, I'm Life!
                            </Typography>
                        </div>

                        <div className={classes.text}>
                            <Typography variant="body1">
                            I'm a new grad pursuing a career in software development.
                            {/* I like working on web applications but I'm also interested in working new things as well. */}
                            </Typography>
                        </div>

                            <Grid container className={classes.links} spacing={0}>
                                        
                            <Collapse in={checked} timeout='auto' unmountOnExit>
                                            <Card>
                                                <CardMedia 
                                                style = {{ height: '50vh', width: '50vw'}}
                                                image='/static/images/pics/resume.png'/>
                                            </Card>
                                        </Collapse>
                                <Grid item>
                                        {/* <Collapse in={checked} timeout='auto' unmountOnExit>
                                            <Card>
                                                <CardMedia 
                                                style = {{ height: '50vh', width: '50vw'}}
                                                image='/static/images/pics/resume.png'/>
                                            </Card>
                                        </Collapse> */}

                                            <IconButton>
                                                <Tooltip title='Resume' arrow>
                                                    <AssignmentIndOutlinedIcon 
                                                        fontSize='large'
                                                        onClick={handleChange} />
                                                </Tooltip>
                                            </IconButton>

                                </Grid>


                                <Grid item>
                                    <IconButton>
                                        <Tooltip title='ayryu@uwaterloo.ca' arrow>
                                            <MailOutlineIcon 
                                            fontSize='large' 
                                            aria-label='Email'
                                            onClick={event => window.location.href='mailto:ayryu@uwaterloo.ca'}/>
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

                            
            </Container>
    
    )
}

export default About;