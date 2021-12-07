import React, { Component, useEffect, useState } from 'react'
import Geocode from "react-geocode";
import styled, { css, ThemeConsumer } from "styled-components";
import {  makeStyles, useTheme } from '@material-ui/core/styles';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { StylesContext } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    mapsStyle: {
        position: 'absolute !important',
        width: '100% !important',
        height: '35% !important',
        bottom: '120px !important',
        left: '0px !important'
    }
}))

function GoogleMaps(props) {
    let theme = useTheme();
    const classes = useStyles();


    Geocode.setApiKey("AIzaSyA19BMs9uSzGyTRE6s6Aziu2xYOfmmmPXc");
    Geocode.setLanguage("de");
    Geocode.setRegion("at");
    Geocode.setLocationType("ROOFTOP");
    

    const [coordinates, setCoordinates] = useState({})

        useEffect(() => {
            Geocode.fromAddress(props.location).then(
                (response) => {
                    const coord = response.results[0].geometry.location;
            
                    setCoordinates(coord)
                },
                (error) => {
                    console.error(error);
                }
                );
        }, [])

        return (<div onClick={(e) => {
            e.stopPropagation();
        }}className="map-area">
            <a href={`http://maps.google.com/?q=${props.location}`}>
            <Map
                className={classes.mapsStyle}
                google={props.google}
                center={coordinates}
                zoom={14}
                >

                <Marker key="marker_1"
                    position={coordinates}


                />

            </Map>
            </a>

        </div>);
}

export default GoogleApiWrapper({

    apiKey: ("AIzaSyA19BMs9uSzGyTRE6s6Aziu2xYOfmmmPXc")

})(GoogleMaps);