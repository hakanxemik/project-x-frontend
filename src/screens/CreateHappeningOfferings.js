import React, { Component, useState, useEffect, useMemo, useRef } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getOfferings } from '../api';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(52, 231, 228, 0.8)'
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'rgba(52, 231, 228, 0.8)'
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(52, 231, 228, 0.8)'
    },
  },
  paper: {
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.primary,
  },
  container: {
    marginBottom: theme.spacing(1.25)
  },
  description: {
    borderColor: 'rgba(52, 231, 228, 0.5)'
  },
  textField: {
    marginTop: theme.spacing(0.5)
  },
  desc: {
    marginTop: '10px'
  }
}));

function CreateHappeningOfferings(props) {
  const theme = useTheme();
  const classes = useStyles();

  const [offerings, setOfferings] = useState([])
  const [offeringSelected, setOfferingSelected] = useState([])

  const handleClick = (e) => {
    let input = parseInt(e.currentTarget.dataset.id)

    let offeringArray = offeringSelected;

    if (offeringArray.includes(input)) {
      offeringArray.splice(offeringArray.indexOf(input), 1);
    } else {
      offeringArray.push(input);
    }

    setOfferingSelected(offeringArray)
    props.handleOfferings(offeringSelected)
  }

  useEffect(() => {
    let happeningTmp = JSON.parse(localStorage.getItem('happening'))

    if (happeningTmp.offerings) {
      if (happeningTmp.offerings.length <= 0)
        props.handleButton(true)
      else
        props.handleButton(false)
    }

    getOfferings().then(response => {
      setOfferings(response)
    })

    if (props.happening.offerings)
      setOfferingSelected(props.happening.offerings)
  }, [])

  return (
    < Grid container direction="column" justify="flex-start" alignItems="center" >
      <Container maxWidth="sm" >
        <BigTitle title={"Was gibt es zu trinken?"} description={"Bitte lege fest was deine Gäste zu trinken oder essen erwartet"} />
        <Grid className={classes.container} container spacing={1}>
          {offerings.map((element, index) => {
            return (
              <Grid key={index} item xs={6}>
                <Button className={classes.paper} onClick={handleClick} data-id={element.id} fullWidth size="large" variant={props.happening.offerings && props.happening.offerings.includes(element.id) ? 'contained' : 'outlined'} color="primary">{element.name}</Button>
              </Grid>
            )
          })}
        </Grid>
        {!props.happening.offerings || props.happening.offerings.length <= 0 && <p className={classes.alert}>Bitte wähle mindestens ein Offering aus</p>}

        <Container className={classes.textField} spacing={1}>
         
            <TextField
              id="standard-basic" 
              label="Sonstiges"
              placeholder="Beschreibe deine Offerings"
              value={props.happening.offeringsDescription}
              onChange={(event) => { props.handleOfferingsDescription(event.target.value) }}
              className={classes.desc}
              fullWidth
              variant="outlined"
            />
       
        </Container>
      </Container>
    </Grid >
  );
}

export default CreateHappeningOfferings;
