import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import ReactCardFlip from 'react-card-flip';
import ProfileCardFront from './GuestCardFront';
import ProfileCardBack from './GuestCardBack';

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
                <ProfileCardFront user={props.user} profileImage={props.profileImage} happening={props.happening} />
            </div>

            <div onClick={handleClick}>
                <ProfileCardBack user={props.user} />
            </div>
        </ReactCardFlip>
    );
}

export default ProfileCardFlip;
