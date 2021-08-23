import React, { Component, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    appBar: {
        background: 'transparent',
        boxShadow: 'none',
        zIndex: -5,
        paddingLeft: -15,
        paddingTop: 20,
        paddingBottom: 20,
        color: 'white'
    },
    grow: {
        flexGrow: 1,
    },
    logo: {
        maxWidth: 128,
    },
}));

export default function LogoBar() {
    const classes = useStyles();

    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (

        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <img src={require("../assets/images/socialup-min.png")} className={classes.logo} alt="logo" onClick={handleClick} />
            </Toolbar>
        </AppBar >
    );
}
