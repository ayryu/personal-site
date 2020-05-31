import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
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
});

const About = () => {
    const classes = useStyles();
    
    return (
        <div>
            <div className={classes.text}>
                <Typography variant="h6" style= {{ fontWeight: 'bolder' }}>
                Hi, I'm Lifedisassembler!
                </Typography>
            </div>

            <div>
                <Grid container  className={classes.links} spacing={0}>

                    <Grid item>
                    <IconButton>
                        <AssignmentIndOutlinedIcon/>
                    </IconButton>
                    </Grid>

                    <Grid item>
                    <IconButton>
                        <GitHubIcon />
                    </IconButton>
                    </Grid>

                    <Grid item>
                    <IconButton>
                        <MailOutlineIcon/>
                    </IconButton>
                    </Grid>

                    <Grid item>
                    <IconButton>
                        <LinkedInIcon/>
                    </IconButton>
                    </Grid>
                
                </Grid>
            </div>

        </div>
    )
}

export default About;