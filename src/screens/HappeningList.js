import React, { Component, useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom"
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';

import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import LogoBar from '../components/LogoBar'
import NavBar from '../components/NavBar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function TabPanel(props) {
    const theme = useTheme();
    const classes = useStyles();

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function HappeningList(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    let history = useHistory();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            {localStorage.getItem('token') ?

                < Grid container direction="column" justify="flex-start" alignItems="center" >
                    <LogoBar />
                    <div className={classes.root}>
                        <AppBar position="static">
                            <Tabs value={value} variant="fullWidth" onChange={handleChange} aria-label="Happenings Overview">
                                <Tab label="My Participations" {...a11yProps(0)} />
                                <Tab label="My Hostings" {...a11yProps(1)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                            <Button onClick={() => {history.push('/happening/applied')}}>See List</Button> 
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Button onClick={() => {history.push('/happening/created')}}>See List</Button>
                        </TabPanel>
                    </div>
                    <NavBar></NavBar>
                </Grid>
                : <Redirect to='/login' />}
        </>
    );
}



export default HappeningList;
