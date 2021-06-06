import React, { Component, useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import HappeningCard from "../components/HappeningCard";
import HappeningCardBack from "../components/HappeningCardBack";

import ReactCardFlip from 'react-card-flip';



function TestComponents(props) {

    const [isFlipped, setFlipped] = useState(false);

    function handleClick(event) {
        let flipped = isFlipped;
        event.preventDefault();
        setFlipped(!flipped);
        console.log("Flipped" + flipped)
    }

    handleClick = handleClick.bind(this);

    return (

        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div onClick={handleClick}>
                <HappeningCard>

                </HappeningCard>
            </div>
            <div onClick={handleClick}>
                <HappeningCardBack>

                </HappeningCardBack>
            </div>
        </ReactCardFlip>
    );
}



export default TestComponents;
