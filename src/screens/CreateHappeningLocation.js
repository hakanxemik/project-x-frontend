import React, { Component, useState, useEffect, useMemo, useRef } from "react";
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import moment from 'moment';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


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

  const [value, setValue] = useState(null);

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

    if (props.happening.location) {
      setValue(props.happening.location)
    }
  }, [])

  const handleValue = (val) => {
    setValue(val)
    props.handleLocation(val.label)
  }

  return (
    < Grid container direction="column" justify="flex-start" alignItems="center">
      <Container maxWidth="sm" >
        <BigTitle title={"Wo findet dein Happening statt?"} />
        <Grid item xs={12}>
          <BigTitle title={props.happening.title} description={"am " + moment(props.happening.date).format('DD.MM.YYYY') + " um " + props.happening.time + " Uhr"} />
        </Grid>
        <Grid className={classes.input} item xs={12}>
        <p style={{fontFamily: 'Roboto', fontSize: '1rem'}}>Adresse</p>
        <GooglePlacesAutocomplete
            apiOptions={{ language: 'de', region: 'at' }}
            apiKey={"AIzaSyA19BMs9uSzGyTRE6s6Aziu2xYOfmmmPXc"}
            selectProps={{
              value,
              onChange: handleValue,
              placeholder: 'Die Adresse deiner Happening',
            }}
            
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
            label="Beschreibung (Klingel, Parkplatz etc...)"
            fullWidth
          />
        </Grid>
      </Container>
    </Grid >
  );
}



export default CreateHappeningLocation;
