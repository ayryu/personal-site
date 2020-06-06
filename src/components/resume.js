import React, { useState } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = ({ resume, toggleView, media, viewState, handleCollapse }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageView, setPageView] = useState(1);
    const [ currentResume, setCurrentResume ] = useState(false)

    const onDocumentLoadSuccess = ({ numPages })  => {
        setNumPages(numPages);
      }

    const viewDarkMode = () => {
        const darkMode = pageView - 1;
        setPageView(darkMode);
        setCurrentResume(view => !view);
    }
    
    const viewLightMode = () => {
        const lightMode = pageView + 1;
        setPageView(lightMode);
        setCurrentResume(view => !view);
    }

    const ChangeViewingModes = () => {
        if(currentResume) {
            return ( //currently viewing light mode
                <div style={{ display: 'flex' }}> 
                    <Link style={{ fontSize: 26, marginRight: 10 }} color="inherit" href='#resume' onClick={viewDarkMode}>
                        Resume (Dark Mode)
                    </Link>
                    <Typography style={{ fontSize: 26, marginRight: 10 }}>|</Typography>
                    <Typography style={{ color: "#20B2AA", fontSize: 26 }}>Resume (Light Mode)</Typography>
                    <IconButton style={{ padding: 0 }} onClick={handleCollapse}>
                        <ExpandMoreIcon style={{ transform: 'rotate(180deg)', width: 30, height: 30,}}/>
                    </IconButton>
                </div>
            ) 
        }
            return ( //currently viewing dark mode
                <div style={{ display: 'flex' }}>
                    <Typography style={{ color: "#20B2AA", fontSize: 26, marginRight: 10 }}>Resume (Dark Mode)</Typography>
                    <Typography style={{ fontSize: 26, marginRight: 10 }}>|</Typography>
                    <Link style={{ fontSize: 26, }} color="inherit" href='#resume' onClick={viewLightMode}>
                        Resume (Light Mode)
                    </Link>
                    <IconButton style={{ padding: 0 }} onClick={handleCollapse}>
                        <ExpandMoreIcon style={{ transform: 'rotate(180deg)', width: 30, height: 30,}}/>
                    </IconButton>
                </div>
            )
    }

    return (
        <div>
            <Breadcrumbs style={{ display: 'flex', justifyContent: 'center' }} aria-label="breadcrumb">
                <ChangeViewingModes />
            </Breadcrumbs>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Document
                        file='/static/resume/mergedresumes.pdf'
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageView} />
                    </Document>
                </div>
        </div>
    )
}

export default Resume;