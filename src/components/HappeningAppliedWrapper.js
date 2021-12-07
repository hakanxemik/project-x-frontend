import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import ReactCardFlip from 'react-card-flip';
import HappeningAppliedCard from './HappeningAppliedCard';
import HappeningCardBack from './HappeningCardBack';

function HappeningAppliedWrapper(props) {

    const [isFlipped, setFlipped] = useState(false)

    const handleClick = (event) => {
        let flipped = isFlipped;
        event.preventDefault();
        setFlipped(!flipped);
    }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div onClick={handleClick}>
            <HappeningAppliedCard happening={props.happening}>
            </HappeningAppliedCard>
        </div>
        
        <div onClick={handleClick}>
            <HappeningCardBack happening={props.happening}>
            </HappeningCardBack>
        </div>
    </ReactCardFlip>
  );
}

export default HappeningAppliedWrapper;
