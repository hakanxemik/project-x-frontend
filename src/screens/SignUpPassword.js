import React, { Component, useState, useEffect } from "react";
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';


function SignUpPassword(props) {

    useEffect(() => {
        let userTmp = JSON.parse(localStorage.getItem('user'))

        if (userTmp) {
            if (userTmp.password)
                props.handleButton(false)
            else
                props.handleButton(true)
        } else {
            props.handleButton(true)
        }

        if (props.user.password == '') {
            props.handleButton(true)
        }
    }, [])

    return (
        <Grid container direction="column" justify="flex-start" alignItems="center">
            <Container maxWidth="sm" >
                <Grid item xs={12}>
                    <BigTitle title="Passwort festlegen" />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        value={props.user.password} 
                        onChange={(event) => {props.handlePassword(event.target.value)}} 
                        id="standard-basic" 
                        label="Passwort"
                        type="password"
                        fullWidth
                        error={props.disable}
                        helperText={!props.disable ? '' : 'Passwort ungültig'}
                    />
                </Grid>
                <Grid style={{
                    marginTop: 30
                  }} item xs={12}>
                    <TextField 
                        value={props.user.password_confirmation} 
                        onChange={(event) => {props.handlePasswordConfirmation(event.target.value)}} 
                        id="standard-basic" 
                        label="Passwort bestätigen"
                        type="password"
                        fullWidth
                        error={props.disable}
                        helperText={!props.disable ? '' : 'Passwort ungültig'}
                    />
                </Grid>
            </Container>
        </Grid>
    )
}

export default SignUpPassword
