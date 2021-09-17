import React, { Component, useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Swal from 'sweetalert2';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { join } from '../api'
import Button from '@material-ui/core/Button';


import moment from "moment";

function HappeningCardBack(props) {

    const [guest, setGuest] = useState(false)

    const useStyles = makeStyles((theme) => ({
        content: {
            height: '100%',
            padding: 18
        },
        cta: {
            display: 'block',
            textAlign: 'center',
            color: '#fff',
            opacity: 0.5,
            letterSpacing: '3px',
            fontSize: 8,
            fontWeight: '600',
            fontFamily: 'Quicksand, sans- serif',
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
            backgroundColor: '#0a0015',
            width: '70vw',
            height: '70vh',
            border: '2px solid',
            borderColor: '#e73490',
            borderRadius: '25px',
            boxShadow: '0 0 0.5em black'
        },
        offerings: {
            display: 'inline',
            margin: '5px 5px',
            padding: '3px 4px',
            border: '1px solid #e73490',
            borderRadius: '20px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginLeft: '0px',
            fontSize: '12px'

        },
        description: {
            fontWeight: '400',
            fontFamily: 'Quicksand, sans- serif',
            fontSize: '14px',
            marginBottom: '0px'
        },

        joinButton: {

            position: 'fixed',
            bottom: theme.spacing(2),
            fontWeight: '600',
            fontFamily: 'Quicksand, sans- serif',
        },

        heading: {
            fontSize: '20px',
            marginBottom: '3px',

            fontWeight: '600',
            fontFamily: 'Quicksand, sans- serif',
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
            <CardContent className={styles.content}>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    /*
                    alignItems={'center'}
                    justifyContent={'center'}*/
                    height={'100%'}

                    width={'100%'}
                    color={'common.white'}
                //textAlign={'center'}

                >
                    <Box>
                        {props.happening.offerings.map((element, index) => {
                            return props.happening.offerings.length < 3 ?
                                <span className={styles.offerings} key={index}>{element.name}</span> :
                                <>
                                    <span className={styles.offerings} key={index}>{element.name}</span>
                                    <span className={styles.offerings}>{'...'}</span>
                                </>
                        })}
                        <h2 className={styles.heading}>Beschreibung</h2>
                        {
                            props.happening.description.length < 10 ? <span className={styles.description}>{props.happening.description}</span> :
                                <span className={styles.description}>{props.happening.description.substring(0, 100) + "..."}</span>
                        }
                    </Box>
                    <Box>
                        <h2 className={styles.heading}>Details</h2>
                        <span className={styles.description}>Eintritt: {props.happening.price} €</span><br />
                        <span className={styles.description}>Uhrzeit: {moment(props.happening.date).format('DD.MM')} um {moment(props.happening.date).format('HH:mm')} Uhr  </span>
                        <span className={styles.description}>Treffpunkt: {props.happening.location.meetingPoint} </span>
                    </Box>
                    {/*                         <Box>
                            <Button onClick={() => {
                                Swal.fire({
                                    title: `<strong>${props.happening.title}</strong>`,
                                    icon: 'info',
                                    html:
                                        `<h3>Happening Art:</h3>` +
                                        props.happening.category.map((element) => {
                                            return `<span style="margin-right: 2px;">${element.name}</span>`
                                        }) +
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
                        </Box> */}
                    <Button variant="extended" className={styles.joinButton} onClick={() => {
                        join(props.happening.id).then((success) => {
                            Swal.fire({
                                title: success ? 'Glückwunsch!' : 'Happening teilnahme fehlgeschlagen!',
                                text: success ? 'Teilnahme an Happening!' : 'Bitte überprüfe deine Eingaben oder versuche es später',
                                icon: success ? 'success' : 'error',
                                confirmButtonText: 'Verstanden'
                            })
                        })
                    }
                    } variant="contained" color="secondary">Teilnehmen</Button>

                </Box>
                <Typography className={styles.cta} variant={'overline'}>
                    TAP FÜR VORDERSEITE
                </Typography>
            </CardContent>
        </Card>
    );
}


export default HappeningCardBack;
