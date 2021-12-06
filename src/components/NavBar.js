import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 20,
        background: 'transparent',
        boxShadow: 'none',
        color: 'white'
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1000,
        top: 0,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}));

export default function NavBar() {
    const classes = useStyles();
    let history = useHistory();

    function handleClickHappenings() {
        console.log("happening")
        history.push("/happeninglist");
    }
    function handleClickProfile() {

        console.log("profile")
        history.push("/Profile");
    }

    function handleClickCreate() {

        console.log("create")
        history.push("/create");
    }

    return (

        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleClickHappenings}>
                    < MenuIcon />
                </IconButton >
                <Fab color="primary" aria-label="add" className={classes.fabButton} onClick={handleClickCreate}>
                    <AddIcon />
                </Fab>
                <div className={classes.grow} />
                <IconButton color="inherit" fontSize="large" onClick={handleClickProfile}>
                    <AccountCircleOutlinedIcon />
                </IconButton>
            </Toolbar >
        </AppBar >
    );
}
