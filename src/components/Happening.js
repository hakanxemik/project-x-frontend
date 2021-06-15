import React, {Component, useState } from "react";
import HappeningCard from "../components/HappeningCard";
import HappeningCardBack from "../components/HappeningCardBack";
import ReactCardFlip from 'react-card-flip';

function Happening(props) {
  const [isFlipped, setFlipped] = useState(false)   

    const handleClick = (event) => {
        let flipped = isFlipped;
        event.preventDefault();
        setFlipped(!flipped);
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
