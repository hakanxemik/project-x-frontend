import React, { Component, useState, useEffect } from "react";
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';


function CreateHappeningTitle(props) { 
    const [title, setTitle] = useState('')

    const handleInput = (titleInput) => {
        setTitle(titleInput)
        props.handleTitle(titleInput)
    }

    useEffect(() => {
        if (props.happening.title)
            setTitle(props.happening.title)
    });

    return (
        <Grid container direction="column" justify="flex-start" alignItems="center">
            <Container maxWidth="sm" >
                <Grid item xs={12}>
                    <BigTitle title="Erstelle dein Happening" description="Bitte lege hierfür einen Titel fest" />
                </Grid>
                <Grid item xs={12}>
                    <TextField value={title}  onChange={(event) => {handleInput(event.target.value)}} id="standard-basic" label="Titel" fullWidth />
                </Grid>
            </Container>
        </Grid>
    )
}

export default CreateHappeningTitle
