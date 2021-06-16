import React, { Component, useState, useEffect } from "react";
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';


function CreateHappeningTitle(props) {

    useEffect(() => {
        let happeningTmp = JSON.parse(localStorage.getItem('happening'))
        
        if (happeningTmp) {
            if (happeningTmp.title)
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
                    <BigTitle title="Erstelle dein Happening" description="Bitte lege hierfür einen Titel fest" />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        value={props.happening.title} 
                        onChange={(event) => {props.handleTitle(event.target.value)}} 
                        id="standard-basic" 
                        label="Titel" 
                        fullWidth
                        error={props.disable}
                        helperText={props.happening.title ? '' : 'Bitte gib ein Titel ein'}
                    />
                </Grid>
            </Container>
        </Grid>
    )
}

export default CreateHappeningTitle
