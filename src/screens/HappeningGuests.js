import React, { Component, useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom"
import { getAppliedHappenings } from '../api'
import Happening from '../components/Happening'

import ProfileCard from '../components/ProfileCard'
import LogoBar from '../components/LogoBar'
import NavBar from '../components/NavBar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ReactCardCarousel from 'react-card-carousel';
import Grid from '@material-ui/core/Grid';
import Swipe from 'react-easy-swipe';
import { TrainRounded } from "@material-ui/icons";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

function HappeningGuests(props) {
    const theme = useTheme();
    const carouselRef = useRef();
    const [isFlipped, setFlipped] = useState(false)
    const [happenings, setHappenings] = useState([])
    const [swipeDirection, setSwipeDirection] = useState('')
    const [loading, setLoading] = useState(true)
    const user = JSON.parse(localStorage.getItem('user'))

    const [guestList, setGuestList] = useState(false)
    const [users, setUsers] = useState({})

    const useStyles = makeStyles((theme) => ({
        menu: {
            marginTop: '5%',
            backgroundColor: '#34E7E4',
            color: 'black',
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            fontSize: '12px'
        },
        back: {
            marginTop: '3%',
            position: 'absolute',
            bottom: '17%',
            right: '20%',
            backgroundColor: '#34E7E4',
            color: 'black',
            width: '60%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            fontSize: '8px',
            zIndex: 999
        }
    }));

    const classes = useStyles();

    function onSwipeMove(pos) {
        if (pos.x > 25) {
            setSwipeDirection('right')
        } else if (pos.x < -25) {
            setSwipeDirection('left')
        }
    }

    function onSwipeEnd() {
        if (swipeDirection === 'left') {
            carouselRef.current.next()
        } else if (swipeDirection === 'right') {
            carouselRef.current.prev()
        }

        setSwipeDirection('')
    }

    const happeningsData = (data) => {
        data.forEach((happening) => {
            let save = TrainRounded

            happening.users.forEach((element) => {
                if (element.lastname === localStorage.getItem('user').lastname && element.firstname === localStorage.getItem('user').firstname) {
                    save = false
                }
            })

            // Eigene Happenings nicht anzeigen zurzeit ausgeschaltet - add save && to activate
            if (happening.maxGuests > happening.users.length - 1) {
                let happeningsTmp = happenings
                happeningsTmp.push(happening)
                setHappenings(happeningsTmp)
            }
        })
        setLoading(false)
    }

    useEffect(() => {
        getAppliedHappenings().then(data => {
            if (data) {
                happeningsData(data)
            }
        })
    }, [])

    let info = {
        marginTop: '30%',
        marginLeft: '10%'
    }

    return (
        <>
            {localStorage.getItem('token') ?

                <Grid justify="center">
                    <LogoBar />
                    {loading && <h1 style={info}>Loading...</h1>}
                    {!loading && happenings && happenings.length <= 0 ?
                        <h1 style={info}>Du hast noch kein Happening erstellt 😲. <br></br><br></br> Erstelle jetzt dein Happening und werde teil der Community!</h1> :
                        <>
                            {!guestList && <ReactCardCarousel ref={carouselRef} spread="narrow">
                                {happenings.length > 0 && happenings.map((happening) => {
                                    return (
                                    <>
                                        <Swipe
                                            onSwipeMove={onSwipeMove}
                                            onSwipeEnd={onSwipeEnd}
                                        >
                                            <Happening happening={happening}></Happening>
                                        </Swipe>

                                        <div onClick={() => {
                                                setGuestList(true)
                                                setUsers(happening.users)
                                            }} className={classes.menu}>
                                                <h1>Gästeliste</h1>
                                        </div>
                                    </>
                                    )
                                })}
                            </ReactCardCarousel>}

                            {guestList && <><ReactCardCarousel ref={carouselRef} spread="narrow">
                                {users.length > 0 && users.map((user, index) => {
                                    
                                    return (
                                        user.attendance.userType !== 'host' &&  <>
                                    <Swipe
                                            onSwipeMove={onSwipeMove}
                                            onSwipeEnd={onSwipeEnd}
                                        >
                                            <ProfileCard user={user}></ProfileCard>
                                    </Swipe>
                                    </>
                                    )
                                })}
                            </ReactCardCarousel>

                            <div onClick={() => {
                                        setGuestList(false)
                                        setUsers({})
                                    }} className={classes.back}>
                                        <h1>Zurück</h1>
                            </div>
                            </>
                            }
                        </>
                    }
                    <NavBar></NavBar>
                </Grid>
                : <Redirect to='/login' />}
        </>
    );
}



export default HappeningGuests;
