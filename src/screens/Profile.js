import React, { Component, useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom"
import { getHappenings } from '../api'
import Happening from '../components/Happening'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import LogoBar from '../components/LogoBar'
import NavBar from '../components/NavBar'
import Logout from '../components/Logout'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ReactCardCarousel from 'react-card-carousel';
import Grid from '@material-ui/core/Grid';
import ProfileCardFlip from "../components/ProfileCardFlip";

function Profile(props) {

    const useStyles = makeStyles((theme) => ({
        profileBox: {
            height: '100%'
        },
    }))

    const styles = useStyles();
    return (
        <>
            {localStorage.getItem('token') ?
                <>
                    <Logout></Logout>
                    < Grid container direction="column" justify="flex-start" alignItems="center" >
                        <LogoBar />
                        <ProfileCardFlip className={styles.profileBox}></ProfileCardFlip>
                        <NavBar></NavBar>
                    </Grid>
                </>
                : <Redirect to='/login' />}
        </>
    );
}



export default Profile;
