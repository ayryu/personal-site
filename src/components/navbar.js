import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexWrap: 'nowrap',
    },
    tabs: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    }
});

const NavBar = () => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <div className={classes.container}>
            <Paper square className={classes.tabs}>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                >
                    <Tab label="About Me" />
                    <Tab label="Projects" />
                </Tabs>
            </Paper>
        </div>

    )
}

export default NavBar;