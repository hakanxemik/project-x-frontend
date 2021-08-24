import React, { Component, useState, useEffect } from "react";
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';


function SignUpName(props) {

    useEffect(() => {
        let userTmp = JSON.parse(localStorage.getItem('user'))
        
        if (userTmp) {
            if (userTmp.firstname && userTmp.lastname)
                props.handleButton(false)
            else
                props.handleButton(true)
        } else {
            props.handleButton(true)
        }
    }, [])

    return (
        <Grid container direction="column" justify="flex-start" alignItems="center">
            <Container maxWidth="sm" >
                <Grid item xs={12}>
                    <BigTitle title="Wie heißt du?" />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        value={props.user.firstname} 
                        onChange={(event) => {props.handleFirstname(event.target.value)}} 
                        id="standard-basic" 
                        label="Vorname" 
                        fullWidth
                        error={props.user.firstname == '' ? true : false}
                        helperText={props.user.firstname != '' ? '' : 'Vorname eingeben'}
                    />
                </Grid>
                <Grid style={{
                    marginTop: 20
                }} item xs={12}>
                    <TextField 
                        value={props.user.lastname} 
                        onChange={(event) => {props.handleLastname(event.target.value)}} 
                        id="standard-basic" 
                        label="Nachname" 
                        fullWidth
                        error={props.user.lastname  == '' ? true : false}
                        helperText={props.user.lastname != '' ? '' : 'Nachname eingeben'}
                    />
                </Grid>
            </Container>
        </Grid>
    )
}

export default SignUpName
