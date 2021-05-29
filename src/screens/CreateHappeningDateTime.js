import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import UsernameInput from "../components/UsernameInput";
import ContinueButton from "../components/ContinueButton";
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { spacing } from "@material-ui/system";
import { Box } from "@material-ui/core";


import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


import {
  useLocation
} from "react-router-dom";


function CreateHappeningDateTime(props) {
  const location = useLocation();
  const happeningSave = location.state.happening
  const [happening, setHappening] = useState(happeningSave)
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();



  let date = new Date();
  let today = date.toISOString().substring(0, 10);
  console.log(props);
  return (
    < Grid container direction="column" justify="flex-start" alignItems="center" {...props}>
      <Container maxWidth="sm" >
        <Grid item xs={12}>
          <BigTitle title={happening.title} description="Bitte lege die Uhrzeit und das Datum für dein Happening fest" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="date"
            fullWidth
            label="Datum"
            type="date"
            defaultValue={today}
            InputLabelProps={{
              shrink: true,
            }}

            onChange={(event) => {
              let tmpHappening = happening;
              tmpHappening.date = event.target.value;
              setHappening(tmpHappening)
            }
            }
          />
        </Grid>
        <Box mt={2}>
          <Grid item xs={12}>
            <TextField
              id="time"
              fullWidth
              label="Uhrzeit"
              type="time"
              defaultValue="18:00"
              InputLabelProps={{
                shrink: true,
              }}

              onChange={(event) => {
                let tmpHappening = happening;
                tmpHappening.time = event.target.value;
                setHappening(tmpHappening)
              }
              }
            />
          </Grid>

        </Box>
        <MobileStepper
          variant="progress"
          steps={7}
          position="bottom"
          activeStep={1}
          nextButton={
            <Link to={{
              pathname: "/CreateHappeningLocation/",
              state: { happening }
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
              pathname: "/CreateHappening/",
              state: { happening }
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



export default CreateHappeningDateTime;
