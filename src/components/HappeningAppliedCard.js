import React, { Component, useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';


import styled, { css } from "styled-components";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import GoogleMaps from '../components/GoogleMaps'
import {getCoordinates} from '../services/geocoding'
import moment from "moment";
import { ClassNames } from "@emotion/react";
import HappeningApplied from "../screens/HappeningApplied";

function HappeningAppliedCard(props) {

    const useStyles = makeStyles((theme) => ({
        content: {
            padding: 18,
        },
        cta: {
            display: 'block',
            textAlign: 'center',
            color: '#fff',
            letterSpacing: '3px',
            fontWeight: 200,
            fontSize: 12,
        },
        title: {
            color: '#fff',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: 0,
            paddingLeft: '5px',
            paddingRight: '5px',
            paddingTop: '-30px'
        },

        cardMedia: {
            /*backgroundColor: `${props.happening.category.color}`,*/
            width: '65vw',
            height: '65vh',
            border: '2px solid',
            borderColor: '#34E7E4',
            borderRadius: '25px',
            boxShadow: '0 0 1em black'
        },
        desc: {
            fontSize: '14px'
        }
    }));

    // Generischer in dem man 
    const styles = useStyles();
    return (
        <Card className={styles.cardMedia}>
            <CardActionArea>
                <CardContent className={styles.content}>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        minHeight={380}
                        color={'common.white'}
                        textAlign={'center'}

                    >
                        <Box>
                            <Grid item xs={12}>
                                <h1 className={styles.title}>{props.happening.title}</h1>
                                <p className={styles.desc}><b>am {moment(props.happening.datetime).format('DD.MM')}</b> um {moment(props.happening.datetime).format('HH:mm')} Uhr <br />in <b>{props.happening.location.meetingPoint.split(',')[1]}</b></p>
                            </Grid>
                        </Box>

                        <Box mb={2}>
                            <Grid item>
                                <AccountCircleOutlinedIcon style={{ verticalAlign: 'middle' }} fontSize={"large"}></AccountCircleOutlinedIcon>
                                {
                                    props.happening.users.map((element) => {
                                        if (element.attendance.userType == 'host') {
                                            return <span>{element.firstname}</span>
                                        }
                                    })
                                }
                            </Grid>
                            {false && <Grid item>
                                <StarOutlinedIcon style={{ verticalAlign: 'middle' }} fontSize={"medium"}></StarOutlinedIcon>
                                        4.9
                                    </Grid>}
                        </Box>

                        <Box my={2}>
                            <Grid item>
                                <GroupOutlinedIcon style={{ verticalAlign: 'middle' }} fontSize={"large"}></GroupOutlinedIcon>
                                {props.happening.users.length - 1} von {props.happening.maxGuests} besetzt
                            </Grid>
                        </Box>

                        
                    </Box>
                    <Typography className={styles.cta} variant={'overline'}>
                    <Grid style={{marginTop: '30px', marginBottom: '20px'}} item>
                                <GroupOutlinedIcon style={{ verticalAlign: 'middle' }} fontSize={"large"}></GroupOutlinedIcon>
                                {props.happening.users.length - 1} von {props.happening.maxGuests} besetzt
                            </Grid>
                        TAP FÜR MEHR
                    </Typography>
                    <GoogleMaps onClick={(e) => e.stopPropagtion()}location={props.happening.location.meetingPoint}></GoogleMaps>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}


export default HappeningAppliedCard;
