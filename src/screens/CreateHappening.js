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

function CreateHappening(props) {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const [happening, setHappening] = useState(
    {
      title: 'asdasdsadas',
      // string 12-01-2021 18:00
      date: '01.07.2021',
      time: '18:00',
      // location: {}
      location: [],
      // category: {type: 'indoor', setting: {'asdasdsa'}}
      category: [],
      // offerings: {'asdasdsa','dsfdf'}
      offerings: [],
      max_guest: 0,
      price: 0
    }
  );
  return (
    <Grid container direction="column" justify="flex-start" alignItems="center" {...props}>
      <Container maxWidth="sm" >
        <Grid item xs={12}>
          <BigTitle title="Erstelle dein Happening" description="Bitte lege hierfür einen Titel fest" />
        </Grid>
        <Grid item xs={12}>
          <TextField id="standard-basic" label="Titel" fullWidth
            onChange={(event) => {
              let tmpHappening = happening;
              tmpHappening.title = event.target.value;
              setHappening(tmpHappening)
            }
            }
          />

        </Grid>
        <Grid item xs={12} >
          <Link to={{
            pathname: "/CreateHappeningDateTime/",
            state: { happening }
          }
          }
          >
          </Link>
        </Grid>
      </Container>
      <MobileStepper
        variant="progress"
        steps={7}
        position="bottom"
        activeStep={0}
        nextButton={
          <Link to={{
            pathname: "/CreateHappeningDateTime/",
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
          <Button size="small" disabled>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Zurück
        </Button>
        }
      />
    </Grid>


    // Nameinput
    // LocationInput
  );
}



export default CreateHappening;
