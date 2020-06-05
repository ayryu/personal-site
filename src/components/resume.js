import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Resume = ({ resume, toggleView, media, viewState, handleCollapse }) => {

    const EnableLink = () => {
        if(viewState) {
            return ( //currently viewing light mode
                <div style={{ display: 'flex' }}> 
                    <Link style={{ fontSize: 26, }} color="inherit" href='#resume' onClick={toggleView}>
                        Resume (Dark Mode)
                    </Link>
                    <Typography style={{ fontSize: 26, }}>|</Typography>
                    <Typography style={{ color: "#20B2AA", fontSize: 26, }}>Resume (Light Mode)</Typography>
                    <IconButton style={{ padding: 0 }} onClick={handleCollapse}>
                        <ExpandMoreIcon style={{ transform: 'rotate(180deg)', width: 30, height: 30,}}/>
                    </IconButton>
                </div>
            ) 
        }
            return ( //currently viewing dark mode
                <div style={{ display: 'flex' }}>
                    <Typography style={{ color: "#20B2AA", fontSize: 26, }}>Resume (Dark Mode)</Typography>
                    <Typography style={{ fontSize: 26, }}>|</Typography>
                    <Link style={{ fontSize: 26, }} color="inherit" href='#resume' onClick={toggleView}>
                        Resume (Light Mode)
                    </Link>
                    <IconButton style={{ padding: 0 }} onClick={handleCollapse}>
                        <ExpandMoreIcon style={{ transform: 'rotate(180deg)', width: 30, height: 30,}}/>
                    </IconButton>
                </div>
            )
    }

    return (
        <div id='resume'>
            <Breadcrumbs aria-label="breadcrumb">
                <EnableLink />
            </Breadcrumbs>
                <Card>
                    <CardMedia 
                        className={media}
                        image={resume.image}
                    />
                </Card>
        </div>
    )
}

export default Resume;