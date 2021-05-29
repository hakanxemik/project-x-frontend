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
import {
  useLocation
} from "react-router-dom";

import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function CreateHappeningCategories(props) {
  //const location = useLocation();
  //const happeningSave = location.state.happening
  //const [happening, setHappening] = useState(happeningSave)
  console.log(props);

  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const classes = useStyles();

  return (
    < Grid container direction="column" justify="flex-start" alignItems="center" {...props}>
      <Container maxWidth="sm" >
        <Grid item xs={12}>
          <BigTitle title={"Kategorien"/*happening.title*/} description={"Bitte lege deine Kategorien für dein Happening fest"} />
        </Grid>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button fullWidth size="large" className={classes.paper} variant="outlined" color="secondary">Grillen</Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth size="large" className={classes.paper} variant="outlined" color="secondary">Party</Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth size="large" className={classes.paper} variant="outlined" color="secondary">Kulinarisch</Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth size="large" className={classes.paper} variant="outlined" color="secondary">Zocken</Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth size="large" className={classes.paper} variant="outlined" color="secondary">Erlebnis</Button>
            </Grid>
          </Grid>
        </div>
        <MobileStepper
          variant="progress"
          steps={7}
          position="bottom"
          activeStep={3}
          nextButton={
            <Link to={{
              pathname: "/CreateHappeningOfferings/",
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
              pathname: "/CreateHappeningLocation/",
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



export default CreateHappeningCategories;
