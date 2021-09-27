import React, { Component, useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';


import Image from '../assets/images/anil.jpg';
import sample from '../assets/images/sample.mp4';


import styled, { css } from "styled-components";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {getUser} from '../api';

function ProfileCardFront(props) {

    useEffect(() => {
        console.log(props.user)
    }, [])

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
            marginBottom: 0,
            paddingLeft: '5px',
            paddingRight: '5px',
            paddingTop: '-30px'
        },

        cardMedia: {
            opacity: 0.8,
            backgroundImage: `url(${props.image})`,
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '70vw',
            height: '70vh',
            border: '2px solid',
            borderColor: '#34E7E4',
            borderRadius: '25px',
            boxShadow: '0 0 1em black'

        }
    }));

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
                        <Box mb={2}>
                            <Grid item xs={12}>
                                <h1 className={styles.title}>Anil, 22</h1>
                                <p>beigetreten am 22.06.2021</p>
                            </Grid>
                        </Box>

                        <Box mb={2}>

                        </Box>

                        <Box my={2}>

                        </Box>
                    </Box>
                    <Typography className={styles.cta} variant={'overline'}>
                        TAP FÜR MEHR
                        </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


export default ProfileCardFront;
