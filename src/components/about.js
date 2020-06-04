import React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Icons from './icons';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        background: "#000",
    },
    avatar: {
        width: theme.spacing(9),
        height: theme.spacing(9),
      },
    text: {
        display: 'inline-block',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: theme.spacing(1),
      },
}));

const About = () => {
    const classes = useStyles();

    return (
            <Container maxWidth="sm" className={classes.root}>
                <CssBaseline />
                        <Avatar
                        className={classes.avatar}
                        alt='Profile'
                        src='/static/images/pics/profile.jpg'/>

                        <div className={classes.text}>
                            <Typography variant="h5" style={{ fontWeight: 'bolder' }}>
                            Hi, I'm Alex Ryu!
                            </Typography>
                            <Typography variant="body2">
                            I like creative problem-solving and learning about self-improvement.
                            </Typography>
                            <Typography variant="body2">
                            I am available for a full-time software developer position starting August 2020.
                            </Typography>
                        </div>

                        <Icons />
   
            </Container>
    )
}

export default About;