<<<<<<< HEAD
import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import ReactCardFlip from 'react-card-flip';
import HappeningCard from './HappeningCard';
import HappeningCardBack from './HappeningCardBack';

function Happening(props) {

    const [isFlipped, setFlipped] = useState(false)
=======
import React, {Component, useState } from "react";
import HappeningCard from "../components/HappeningCard";
import HappeningCardBack from "../components/HappeningCardBack";
import ReactCardFlip from 'react-card-flip';

function Happening(props) {
  const [isFlipped, setFlipped] = useState(false)   
>>>>>>> test/builder-x

    const handleClick = (event) => {
        let flipped = isFlipped;
        event.preventDefault();
        setFlipped(!flipped);
<<<<<<< HEAD
        console.log("Flipped" + flipped)
    }

    return (
        <ReactCardFlip flipSpeedFrontToBack={0.8} isFlipped={isFlipped} flipDirection="horizontal">
            <div onClick={handleClick}>
                <HappeningCard happening={props.happening}>
                </HappeningCard>
            </div>

            <div onClick={handleClick}>
                <HappeningCardBack happening={props.happening}>

                </HappeningCardBack>
            </div>
        </ReactCardFlip>
    );
}

export default Happening
=======
    }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div onClick={handleClick}>
            <HappeningCard happening={props.happening}>
            </HappeningCard>
        </div>
        
        <div onClick={handleClick}>
            <HappeningCardBack happening={props.happening}>
            </HappeningCardBack>
        </div>
    </ReactCardFlip>
  );
}

export default Happening;
>>>>>>> test/builder-x
