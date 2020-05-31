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
    //   maxHeight: 'auto',
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    // content: {
    //     height: 20,
    // }
  });

const Project = ({ project }) => {
    const classes = useStyles();
    return (
        <>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="/static/images/cards/dark-forest.jpg"
                title={project.name}
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
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