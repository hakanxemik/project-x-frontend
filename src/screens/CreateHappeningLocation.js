import React, { Component, useState, useEffect, useMemo, useRef } from "react";
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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

  const handleButton = () => {
    let happeningTmp = JSON.parse(localStorage.getItem('happening'))

    if (!(happeningTmp.location && happeningTmp.locationDescription)) {
      props.handleButton(true)
    } else {
      props.handleButton(false)
    }
  }

  useEffect(() => {
    handleButton()
  }, [])

  return (
    < Grid container direction="column" justify="flex-start" alignItems="center">
      <Container maxWidth="sm" >
        <BigTitle title={"Wo findet dein Happening statt?"} />
        <Grid item xs={12}>
          <BigTitle title={props.happening.title} description={"am " + moment(props.happening.date).format('DD.MM.YYYY') + " um " + props.happening.time + " Uhr"} />
        </Grid>
        <Grid className={classes.input} item xs={12}>
          <TextField id="standard-basic"
            value={props.happening.location}
            error={props.happening.location ? false : true}
            onChange={(event) => {
              props.handleLocation(event.target.value)
            }}
            helperText={props.happening.location ? '' : 'Bitte gib einen gültigen Ort ein'}
            label="Ort"
            fullWidth
          />
        </Grid>
        <Grid className={classes.input} item xs={12}>
          <TextField
            id="standard-basic"
            error={props.happening.locationDescription ? false : true}
            value={props.happening.locationDescription}
            onChange={(event) => {
              props.handleLocationDesc(event.target.value)
            }}
            helperText={props.happening.locationDescription ? '' : 'Bitte gib eine gültige Beschreibung ein'}
            label="Beschreibung"
            fullWidth
          />
        </Grid>
      </Container>
    </Grid >
  );
}



export default CreateHappeningLocation;
