import React, { Component, useState, useEffect, useMemo, useRef } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { styled } from '@mui/material/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Box } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Swal from 'sweetalert2';
import GroupIcon from '@mui/icons-material/Group';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

import {createHappening} from '../api'

const InputSlide = styled(MuiInput)`
  width: 42px;
`;

const useStyles = makeStyles((theme) => ({
  button: {
    textAlign: 'center',
    color: theme.palette.primary,
    width: '350px !important',
    paddingTop: '12px',
    paddingBottom: '12px',
    borderRadius: '10px'
  },
  description: {
    marginTop: theme.spacing(2.5)
  }
}));

function CreateHappeningClosing(props) {
  const theme = useTheme();
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    let happeningTmp = JSON.parse(localStorage.getItem('happening'))

    if (!happeningTmp.description || !happeningTmp.price || !happeningTmp.maxGuests )
      props.handleButton(true)
    else
      props.handleButton(false)

  }, [])

  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    props.handleGuests(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 25) {
      setValue(25);
    }
  };

  return (
    < Grid container direction="column" justify="flex-start" alignItems="center" >
      <Container maxWidth="sm" >
        <Grid item xs={12}>
          <BigTitle title={"Wie viele dürfen kommen?"} description={"Bitte lege fest wie viele Gäste zu welchem Eintrittspreis kommen dürfen"} />
        </Grid>
        <Box sx={{ width: 350 }}>
      <Typography id="input-slider" gutterBottom>
        Anzahl Gäste
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <GroupIcon />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            style={{color: '#34E7E4'}}
            step={1}
            min={2}
            max={25}
          />
        </Grid>
        <Grid item>
          <InputSlide
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            style={{color: 'white'}}
            inputProps={{
              step: 1,
              min: 2,
              max: 25,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
        <Box mt={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="amount">Betrag</InputLabel>
              <Input
                type="number"
                id="amount"
                value={props.happening.price}
                onChange={(event) => {props.handlePrice(event.target.value)}}
                startAdornment={<InputAdornment position="start">€</InputAdornment>}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} className={classes.description}>
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
        {(!props.happening.maxGuests || !props.happening.price || !props.happening.description) 
        && <p>Bitte gib alle benötigten Informationen ein um fortzufahren</p>}

      </Container>
    {/*  Hier mit History Push lösen! .then(() => { history.push('/')  */}  
      <Button style={{marginTop: '15%', fontSize: '20px'}} disabled={props.disable} onClick={() => createHappening(props.happening).then((success) => {
        Swal.fire({
          title: success ? 'Glückwunsch!' : 'Happening konnte nicht erstellt werden!',
          text: success ? 'Dein Happening wurde erfolgreich erstellt.' : 'Bitte überprüfe deine Eingaben oder versuche es später',
          icon: success ? 'success' : 'error',
          confirmButtonText: 'Verstanden'
        }).then(function (value) {
          console.log(value)
          history.push('/')
        })
      })} className={classes.button} variant="outlined" color="primary">
        Happening erstellen
      </Button>
    </Grid >
  );
}



export default CreateHappeningClosing;
