import React, { Component, useState, useEffect } from "react";
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';


function SignUpEmail(props) {

    useEffect(() => {
        let userTmp = JSON.parse(localStorage.getItem('user'))
        
        if (userTmp) {
            if (userTmp.email)
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
                    <BigTitle title="Jetzt beitreten!" description="Bitte gebe uns deine Email Adresse" />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        value={props.user.email} 
                        onChange={(event) => {props.handleEmail(event.target.value)}} 
                        id="standard-basic" 
                        label="Email"
                        type="email"
                        fullWidth
                        error={props.disable}
                        helperText={!props.disable ? '' : 'Email Adresse ungültig'}
                    />
                </Grid>
            </Container>
        </Grid>
    )
}

export default SignUpEmail
