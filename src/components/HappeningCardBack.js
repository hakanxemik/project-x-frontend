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
import {join} from '../api'
import Button from '@material-ui/core/Button';

function HappeningCardBack(props) {

    const [guest, setGuest] = useState(false)

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
            borderColor: '#e73490',
            borderRadius: '25px',
            boxShadow: '0 0 1em black'
        },
        offerings: {
            display: 'inline',
            margin: '5px 5px',
            padding: '3px 8px',
            border: '2px solid white',
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

    const checkGuest = () => {
        props.happening.users.forEach((element) => {
            if (element.name === localStorage.getItem('users').name) {
                if (element.attendance.userType === 'guest') {

                }
            }
        })
    }

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
                            <h1 >Includings</h1>
                            {props.happening.offerings.map((element, index) => {
                                return props.happening.offerings.length < 3 ?
                                    <span className={styles.offerings} key={index}>{element.name}</span> :
                                    <>
                                        <span className={styles.offerings} key={index}>{element.name}</span>
                                        <span className={styles.offerings}>{'...'}</span>
                                    </>
                            })}
                        </Box>

                        <Box>
                            <h1>Beschreibung</h1>
                            {
                                props.happening.description.length < 10 ? <span className={styles.description}>{props.happening.description}</span> :
                                    <span className={styles.description}>{props.happening.description.substring(0, 15) + "..."}</span>
                            }
                        </Box>

                        <Box my={2}>
                            <Grid className={styles.priceBox} item>
                                <EuroIcon style={{ verticalAlign: 'middle' }} fontSize={"large"}></EuroIcon>
                                <span className={styles.price}>{props.happening.price}</span>
                            </Grid>
                        </Box>
                        <Box>
                            <Button onClick={() => {
                                Swal.fire({
                                    title: `<strong>${props.happening.title}</strong>`,
                                    icon: 'info',
                                    html:
                                        `<h3>Includings:</h3>` +
                                        props.happening.offerings.map((element) => {
                                            return `<span style="margin-right: 2px;">${element.name}</span>`
                                        }) +
                                        `<h3>Beschreibung:</h3>` +
                                        `<p>${props.happening.description}</p>` +
                                        `<h3>Preis:</h3>` +
                                        `<p>${props.happening.price} €</p>`,
                                    showCloseButton: true,
                                    showCancelButton: false,
                                    showConfirmButton: true,
                                    focusClose: false
                                })
                            }} fullWidth size="small" variant={'outlined'} color="tertiary">
                                Mehr Anzeigen
                                </Button>
                        </Box>
                        <Box my={2}>
                            <Button onClick={() => {join(props.happening.id).then((success) => {
                                Swal.fire({
                                    title: success ? 'Glückwunsch!' : 'Happening teilnahme fehlgeschlagen!',
                                    text: success ? 'Teilnahme an Happening!' : 'Bitte überprüfe deine Eingaben oder versuche es später',
                                    icon: success ? 'success' : 'error',
                                    confirmButtonText: 'Verstanden'
                                  })
                                })
                            }
                            } fullWidth size="medium" variant={'contained'} color="tertiary">Teilnehmen</Button>
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


export default HappeningCardBack;
