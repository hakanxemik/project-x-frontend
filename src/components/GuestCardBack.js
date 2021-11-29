import React, { Component, useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';


import styled, { css } from "styled-components";
import Grid from '@material-ui/core/Grid';
import Swal from 'sweetalert2';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EuroIcon from '@material-ui/icons/Euro';
import Button from '@material-ui/core/Button';
import {getUser} from '../api';

function GuestCardBack(props) {

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
            paddingTop: '-30px',
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10
        },

        cardMedia: {
            backgroundColor: '#0a0d21',
            width: '70vw',
            height: '70vh',
            border: '2px solid',
            borderColor: '#e73490',
            borderRadius: '25px',
            boxShadow: '0 0 1em black'
        },
        interests: {
            display: 'block',
            margin: '10px 10px',
            padding: '4px 8px',
            border: '2px solid white',
            borderColor: '#e73490',
            borderRadius: '20px',
            fontWeight: 'bold'
        },
        description: {
            fontSize: '16px'
        },
        price: {
            fontSize: '20px',
            fontWeight: 'bold',
            marginLeft: '5px'
        },
        priceBox: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }));

    const styles = useStyles();


    const [user, setUser] = useState('');

    return (
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
                        <Box>

                        </Box>

                        <Box>
                            <h1 className={styles.content}>{user.firstname} {user.firstname}</h1>

                        </Box>

                        <Box my={2}>
                            <h3>Interessen</h3>
                         
                        </Box>
                        <Box>

                        </Box>

                    </Box>
                    <Typography className={styles.cta} variant={'overline'}>
                        TAP FÜR VORDERSEITE
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


export default GuestCardBack;
