import React, { Component, useState, useEffect, useMemo, useRef } from "react";
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import moment from 'moment';


const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  input: {
    marginTop: theme.spacing(2)
  }
}));

function CreateHappeningLocation(props) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    < Grid container direction="column" justify="flex-start" alignItems="center" {...props}>
      <Container maxWidth="sm" >
        <BigTitle title={"Wo findet dein Happening statt?"} />
        <Grid item xs={12}>
          <BigTitle title={props.happening.title} description={"am " + moment(props.happening.date).format('DD.MM.YYYY') + " um " + props.happening.time + " Uhr"} />
        </Grid>
        <Grid className={classes.input} item xs={12}>
            <TextField id="standard-basic" value={props.happening.location} onChange={(event) => {props.handleLocation(event.target.value)}} label="Ort" fullWidth />
        </Grid>
        <Grid className={classes.input} item xs={12}>
            <TextField id="standard-basic" value={props.happening.locationDescription} onChange={(event) => {props.handleLocationDesc(event.target.value)}} label="Beschreibung" fullWidth />
        </Grid>
      </Container>
    </Grid >
  );
}



export default CreateHappeningLocation;
