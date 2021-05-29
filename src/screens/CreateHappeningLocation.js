import React, { Component, useState, useEffect, useMemo, useRef } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Box } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import {
  useLocation
} from "react-router-dom";

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
}));

function CreateHappeningLocation(props) {
  const location = useLocation();
  const happeningSave = location.state.happening
  const [happening, setHappening] = useState(happeningSave)
  console.log(props);


  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();

  const classes = useStyles();
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const loaded = useRef(false);

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyA-puvDvYS3xeEbif4v6_MCnyzeg4TXQSQ&libraries=places',
        document.querySelector('head'),
        'google-maps',
      );
    }

    loaded.current = true;
  }

  const fetch = useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    [],
  );

  useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);


  return (
    < Grid container direction="column" justify="flex-start" alignItems="center" {...props}>
      <Container maxWidth="sm" >
        <Grid item xs={12}>
          <BigTitle title={happening.title} description={"am " + happening.date + " um " + happening.time + " Uhr"} />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            id="google-map-demo"
            getOptionLabel={(option) => (typeof option === 'string' ? option : option.description)}
            filterOptions={(x) => x}
            options={options}
            autoComplete
            fullWidth
            includeInputInList
            filterSelectedOptions
            value={value}
            onChange={(event, newValue) => {
              setOptions(newValue ? [newValue, ...options] : options);
              setValue(newValue);
            }}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Add a location" variant="outlined" fullWidth />
            )}
            renderOption={(option) => {
              const matches = option.structured_formatting.main_text_matched_substrings;
              const parts = parse(
                option.structured_formatting.main_text,
                matches.map((match) => [match.offset, match.offset + match.length]),
              );

              return (
                <Grid container alignItems="center">
                  <Grid item xs>
                    {parts.map((part, index) => (
                      <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                        {part.text}
                      </span>
                    ))}

                    <Typography variant="body2" color="textSecondary">
                      {option.structured_formatting.secondary_text}
                    </Typography>
                  </Grid>
                </Grid>
              );
            }}
          />
        </Grid>

        <MobileStepper
          variant="progress"
          steps={7}
          position="bottom"
          activeStep={2}
          nextButton={
            <Link to={{
              pathname: "/CreateHappeningCategories/",
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
              pathname: "/CreateHappeningDateTime/",
              state: { happening }
            }}
            >
              <Button size="small" >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Zurück
        </Button></ Link >
          }
        />
      </Container>
    </Grid >
  );
}



export default CreateHappeningLocation;
