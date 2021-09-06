import React, { Component, useState, useEffect } from "react";
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';


function SignUpEmail(props) {

    useEffect(() => {
/*         let userTmp = JSON.parse(localStorage.getItem('user'))

        if (userTmp) {
            if (!props.validateEmail(props.user.email)) {
                props.handleButton(true)
            } else if (props.user.password.length < 8) {
                props.handleButton(true)
            } else if (props.user.password != userTmp.password_confirmation) {
                props.handleButton(true)
            } else {
                props.handleButton(false)
            }
        } */
        
        if (props.user.email == '' || props.user.password == '') {
            props.handleButton(true)
        }
        
    }, [])

    return (
        <Grid container direction="column" justify="flex-start" alignItems="center">
            <Container maxWidth="sm" >
                <Grid item xs={12}>
                    <BigTitle title="Jetzt beitreten!" description="Email & Passwort festlegen" />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        value={props.user.email} 
                        onChange={(event) => {
                            props.handleEmail(event.target.value)
                        }} 
                        id="standard-basic" 
                        label="Email"
                        type="email"
                        fullWidth
                        error={!props.validateEmail(props.user.email) && props.user.email != ''}
                        helperText={!props.validateEmail(props.user.email) && props.user.email != '' ? 'Email Adresse ungültig' : ''}
                    />
                </Grid>
                <Grid item style={{
                    marginTop: 20
                  }}
                  xs={12}>
                    <TextField 
                        value={props.user.password} 
                        onChange={(event) => {
                            props.handlePassword(event.target.value)
                        }} 
                        id="standard-basic" 
                        label="Passwort"
                        type="password"
                        fullWidth
                        error={props.user.password.length < 8 && props.user.password != '' ? true : false}
                        helperText={props.user.password.length < 8 && props.user.password != '' ? 'Passwort muss min. 8 Zeichen lang sein' : ''}
                    />
                </Grid>
                <Grid style={{
                    marginTop: 20
                  }} item xs={12}>
                    <TextField 
                        value={props.user.password_confirmation} 
                        onChange={(event) => {
                            props.handlePasswordConfirmation(event.target.value)
                        }} 
                        id="standard-basic" 
                        label="Passwort bestätigen"
                        type="password"
                        fullWidth
                        error={props.user.password != props.user.password_confirmation && props.user.password_confirmation != '' ? true : false}
                        helperText={props.user.password != props.user.password_confirmation && props.user.password_confirmation != '' ? 'Passwörter stimmen überrein' : ''}
                    />
                </Grid>
            </Container>
        </Grid>
    )
}

export default SignUpEmail
