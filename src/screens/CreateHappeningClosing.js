import React, { Component, useState, useEffect, useMemo, useRef } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import BigTitle from "../components/BigTitle";
import Paper from '@material-ui/core/Paper';
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


import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import {
  useLocation
} from "react-router-dom";

function CreateHappeningClosing(props) {
  //const location = useLocation();
  //const happeningSave = location.state.happening
  //const [happening, setHappening] = useState(happeningSave)
  console.log(props);
  const guestsCount = [2, 4, 6, 8, 10, 15, 20, 30, 50, 100];

  const [guests, setGuests] = useState(guestsCount[0]);

  const handleChange = (event) => {
    setGuests(event.target.value);
  };

  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();

  return (
    < Grid container direction="column" justify="flex-start" alignItems="center" {...props}>
      <Container maxWidth="sm" >
        <Grid item xs={12}>
          <BigTitle title={"Wie viele dürfen kommen?"/*happening.title*/} description={"Bitte lege fest wie viele Gäste zu welchem Eintrittspreis kommen dürfen"} />
        </Grid>
        <Grid item xs={12}>
          <form noValidate autoComplete="off">
            <div>
              <TextField
                id="select-guests"
                select
                label="Gäste Anzahl"
                value={guests}
                onChange={handleChange}
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
                startAdornment={<InputAdornment position="start">€</InputAdornment>}
              />
            </FormControl>
          </Grid>
        </Box>
        <MobileStepper
          variant="progress"
          steps={7}
          position="bottom"
          activeStep={6}
          nextButton={
            <Link to={{
              pathname: "/HomeScreen/",
              state: { /*happening*/ }
            }}
            >
              <Button size="small">
                Weiter
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            </Link>
          }
          backButton={
            <Link to={{
              pathname: "/CreateHappeningOfferings/",
              state: { /*happening*/ }
            }}
            >
              <Button size="small" >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Zurück
        </Button>
            </Link>
          }
        />
      </Container>
    </Grid >
  );
}



export default CreateHappeningClosing;
