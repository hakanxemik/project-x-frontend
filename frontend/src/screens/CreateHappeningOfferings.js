import React, { Component, useState, useEffect, useMemo, useRef } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import BigTitle from "../components/BigTitle";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Box } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import {
  useLocation
} from "react-router-dom";

function CreateHappeningOfferings(props) {
  //const location = useLocation();
  //const happeningSave = location.state.happening
  //const [happening, setHappening] = useState(happeningSave)
  console.log(props);

  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const [state, setState] = useState({
    test1: true,
    test2: false,
    test3: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  const { test1, test2, test3 } = state;
  const error = [test1, test2, test3].filter((v) => v).length <= 1;

  return (
    < Grid container direction="column" justify="flex-start" alignItems="center" {...props}>
      <Container maxWidth="sm" >
        <Grid item xs={12}>
          <BigTitle title={"Was gibt es zu trinken?"/*happening.title*/} description={"Bitte lege fest was deine Gäste zu trinken erwartet"} />
        </Grid>
        <Grid item xs={12}>
          <FormControl required error={error} component="fieldset" >
            <FormLabel component="legend">Bitte mindestens zwei auswählen</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={test1} onChange={handleChange} name="test1" />}
                label="Bier Bier Bier"
              />
              <FormControlLabel
                control={<Checkbox checked={test2} onChange={handleChange} name="test2" />}
                label="Vino fürs Kino"
              />
              <FormControlLabel
                control={<Checkbox checked={test3} onChange={handleChange} name="test3" />}
                label="Yeni Raki für die Türken"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} spacing={2}>
          <TextField
            id="outlined-multiline-static"
            label="Sonstiges"
            multiline
            rows={4}
            defaultValue="..."
            variant="outlined"
            fullWidth
          />
        </Grid>

        <MobileStepper
          variant="progress"
          steps={7}
          position="bottom"
          activeStep={5}
          nextButton={
            <Link to={{
              pathname: "/CreateHappeningClosing/",
              state: { /*happening*/ }
            }}
            >
              <Button size="small" >
                Weiter
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            </Link>
          }
          backButton={
            <Link to={{
              pathname: "/CreateHappeningCategories/",
              state: { /*happening*/ }
            }}
            >
              <Button size="small" >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Zurück
        </Button></Link>
          }
        />
      </Container>
    </Grid >
  );
}



export default CreateHappeningOfferings;
