import React, { Component, useState, useEffect } from "react";
import ReactCardFlip from 'react-card-flip';
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


const useStyles = makeStyles(() => ({
    content: {
        padding: 24,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white'
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
        letterSpacing: '2px',
        marginBottom: 0
    },

    cardMedia: {
        backgroundColor: '#ff9900'
    }
}));




function HappeningCardBack(props) {

    const styles = useStyles();
    return (
        <Grid container justify="center" align="center" direction="row">

            <Grid item xs={10} >
                <Card className={styles.cardMedia}>
                    <CardActionArea>
                        <CardContent className={styles.content}>
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                minHeight={360}
                                color={'common.white'}
                                textAlign={'center'}

                            >
                                <Box mb={3}>
                                    <Grid item xs={12}>
                                        <h1 className={styles.title}>Grill & Chill</h1>
                                        <h3>25.06 um 18:00 Uhr <br />in Bludenz</h3>
                                    </Grid>
                                </Box>
                            </Box>
                            <Typography className={styles.cta} variant={'overline'}>
                                TAP FÜR VORDERSEITE
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid >
    );
}


export default HappeningCardBack;