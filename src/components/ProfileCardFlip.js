import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import ReactCardFlip from 'react-card-flip';
import ProfileCardFront from './ProfileCardFront';
import ProfileCardBack from './ProfileCardBack';

function ProfileCardFlip(props) {

    const [isFlipped, setFlipped] = useState(false)

    const handleClick = (event) => {
        let flipped = isFlipped;
        event.preventDefault();
        setFlipped(!flipped);
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div onClick={handleClick}>
                <ProfileCardFront happening={props.happening} />
            </div>

            <div onClick={handleClick}>
                <ProfileCardBack happening={props.happening} />
            </div>
        </ReactCardFlip>
    );
}

export default ProfileCardFlip;
