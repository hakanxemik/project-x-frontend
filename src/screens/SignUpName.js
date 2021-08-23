import React, { Component, useState, useEffect } from "react";
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';


function SignUpName(props) {

    useEffect(() => {
        let userTmp = JSON.parse(localStorage.getItem('user'))
        
        if (userTmp) {
            if (userTmp.name)
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
                        value={props.user.name} 
                        onChange={(event) => {props.handleName(event.target.value)}} 
                        id="standard-basic" 
                        label="Name" 
                        fullWidth
                        error={props.disable}
                        helperText={props.user.name ? '' : 'Name eingeben'}
                    />
                </Grid>
            </Container>
        </Grid>
    )
}

export default SignUpName
