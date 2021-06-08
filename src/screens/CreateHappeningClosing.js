import React, { Component, useState, useEffect, useMemo, useRef } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Box } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import {createHappening} from '../api'

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.text.primary,
    marginTop: theme.spacing(6),
    width: "60%",
  },
  descBox: {
    marginTop: theme.spacing(2)
  }
}));

function CreateHappeningClosing(props) {
  const theme = useTheme();
  const classes = useStyles();
  const guestsCount = [2, 4, 6, 8, 10, 15, 20, 30, 50, 100];

  return (
    < Grid container direction="column" justify="flex-start" alignItems="center" {...props}>
      <Container maxWidth="sm" >
        <Grid item xs={12}>
          <BigTitle title={"Wie viele dürfen kommen?"} description={"Bitte lege fest wie viele Gäste zu welchem Eintrittspreis kommen dürfen"} />
        </Grid>
        <Grid item xs={12}>
          <form noValidate autoComplete="off">
            <div>
              <TextField
                id="select-guests"
                select
                label="Gäste Anzahl"
                value={props.happening.maxGuests}
                onChange={(event) => {props.handleGuests(event.target.value)}}
                fullWidth
              >
                {guestsCount.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </form>
        </Grid>
        <Box mt={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="amount">Betrag</InputLabel>
              <Input
                id="amount"
                value={props.happening.price}
                onChange={(event) => {props.handlePrice(event.target.value)}}
                startAdornment={<InputAdornment position="start">€</InputAdornment>}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} spacing={4}>
          <TextField
            id="outlined-multiline-static"
            label="Willst du deinen Gästen noch was sagen?"
            multiline
            rows={2}
            value={props.happening.description}
            onChange={(event) => {props.handleDesc(event.target.value)}}
            variant="outlined"
            className={classes.descBox}
            fullWidth
          />
        </Grid>
        </Box>
      </Container>
    {/*  Hier mit History Push lösen! .then(() => { history.push('/')  */}  
      <Button onClick={() => createHappening(props.happening).then()} className={classes.button} variant="outlined" color="primary">
        FERTIG
      </Button>
    </Grid >
  );
}



export default CreateHappeningClosing;
