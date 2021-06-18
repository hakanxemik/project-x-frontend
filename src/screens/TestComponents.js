import React, { Component, useState, useEffect, useRef } from "react";
import { getHappenings } from '../api'
import Happening from '../components/Happening'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ReactCardCarousel from 'react-card-carousel';
import Grid from '@material-ui/core/Grid';
import Swipe from 'react-easy-swipe';

function TestComponents(props) {

    const carouselRef = useRef();
    const [isFlipped, setFlipped] = useState(false)
    const [happenings, setHappenings] = useState([])
    const [swipeDirection, setSwipeDirection] = useState('')
    
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

    useEffect(() => {
        getHappenings().then(data => {
            setHappenings(data)
            console.log(data)
        })
    }, [])
    

    return (
        <>
            <Grid justify="center">
                {/* Wiederverwendbar eigene Component plus Naming generischer */}
                <ReactCardCarousel ref={carouselRef} spread="narrow">
                    {happenings.map((element, index) => {
                        return (
                            <Swipe
                                onSwipeMove={onSwipeMove}
                                onSwipeEnd={onSwipeEnd}
                            >
                                <Happening happening={element}></Happening>
                            </Swipe>
                        )
                    })}
                </ReactCardCarousel>
            </Grid>
        </>
    );
}



export default TestComponents;
