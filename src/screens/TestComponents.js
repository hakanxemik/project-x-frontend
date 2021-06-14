import React, { Component, useState, useEffect } from "react";
import { getHappenings } from '../api'
import HappeningCard from "../components/HappeningCard";
import HappeningCardBack from "../components/HappeningCardBack";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ReactCardFlip from 'react-card-flip';



function TestComponents(props) {

    const [isFlipped, setFlipped] = useState(false);
    const [happenings, setHappenings] = useState([])

    function handleClick(event) {
        let flipped = isFlipped;
        event.preventDefault();
        setFlipped(!flipped);
        console.log("Flipped" + flipped)
    }

    handleClick = handleClick.bind(this);

    useEffect(() => {
        //let happeningTmp;
        getHappenings().then(data => {
            setHappenings(data)
        }) //.then(() => setHappenings(happeningTmp))
    }, [])

    return (
        <>
             <Carousel showIndicators="false" thumbWidth="100">
                 {happenings.map((element, index) => {
                    return <ReactCardFlip key={index} isFlipped={isFlipped} flipDirection="horizontal">
                        <div onClick={handleClick}>
                            <HappeningCard happening={element}>
                            </HappeningCard>
                        </div>
                        
                        <div onClick={handleClick}>
                            <HappeningCardBack happening={element}>
                 
                            </HappeningCardBack>
                        </div>
                    </ReactCardFlip>
                 })}
            </Carousel>
        </>
    );
}



export default TestComponents;
