import React, { Component, useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom"
import { getHappenings } from '../api'
import Happening from '../components/Happening'

import LogoBar from '../components/LogoBar'
import NavBar from '../components/NavBar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ReactCardCarousel from 'react-card-carousel';
import Grid from '@material-ui/core/Grid';
import Swipe from 'react-easy-swipe';
import { TrainRounded } from "@material-ui/icons";

function Overview(props) {

    const carouselRef = useRef();
    const [isFlipped, setFlipped] = useState(false)
    const [happenings, setHappenings] = useState([])
    const [swipeDirection, setSwipeDirection] = useState('')
    const [loading, setLoading] = useState(true)

    const user = JSON.parse(localStorage.getItem('user'))
    
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
                if (element.name === user.name) {
                    save = false
                }
            })

            if (save && happening.maxGuests > happening.users.length - 1) {
                let happeningsTmp = happenings
                happeningsTmp.push(happening)
                setHappenings(happeningsTmp)
            }
        })
        setLoading(false)
    }

    useEffect(() => {
        getHappenings().then(data => {
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
                        <h1 style={info}>Keine Happenings vorhanden 😲. <br></br><br></br> Erstelle jetzt dein Happening und werde teil der Community!</h1> :
                        <>
                            <ReactCardCarousel ref={carouselRef} spread="narrow">
                                {happenings.length > 0 && happenings.map((happening) => {
                                    return (
                                    <Swipe
                                            onSwipeMove={onSwipeMove}
                                            onSwipeEnd={onSwipeEnd}
                                        >
                                            <Happening happening={happening}></Happening>
                                        </Swipe>
                                    )
                                })}
                            </ReactCardCarousel>
                        </>
                    }
                    <NavBar></NavBar>
                </Grid>
                : <Redirect to='/login' />}
        </>
    );
}



export default Overview;
