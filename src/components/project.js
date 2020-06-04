import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
      backgroundColor: 'transparent',
    },
    media: {
      height: 0,
      paddingTop: '36.25%',
    },
    content: {
        margin: -10,

    },
  });

const Project = ({ project }) => {
    const classes = useStyles();
    return (
        <>
        <Card className={classes.root}>
            <CardActionArea href={project.link} >
                <CardMedia
                className={classes.media}
                image={project.image}
                title={project.name}
                />
                <CardContent className={classes.content}>
                    <Typography variant="h5" component="h2">
                        {project.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {project.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </>
    )
}

export default Project;