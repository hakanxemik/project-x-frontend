import React, { Component, useState, useEffect, useMemo, useRef } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {getOfferings} from '../api';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(245, 0, 87, 0.5)'
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'rgba(245, 0, 87, 0.5)'
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(245, 0, 87, 0.5)'
    },
  },
  paper: {
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    marginBottom: theme.spacing(1.25)
  },
  description: {
    borderColor: 'rgba(245, 0, 87, 0.5)'
  }
})); 

function CreateHappeningOfferings(props) {
  const theme = useTheme();
  const classes = useStyles();

  const [offerings, setOfferings] = useState([])
  const [offeringSelected, setOfferingSelected] = useState([])
  const [offeringsDescripton, setOfferingsDescripton] = useState('')

  const handleClick = (e) => {
    let input = e.currentTarget.dataset.id

    let offeringArray = offeringSelected;

    if (offeringArray.includes(input)){
      offeringArray.splice(offeringArray.indexOf(input), 1);
    } else {
      offeringArray.push(input);
    }

    setOfferingSelected(offeringArray)
    props.handleOfferings(offeringSelected)
  }

  const handleOfferingsDescription = (description) => {
    setOfferingsDescripton(description)
    props.handleOfferingsDescription(description)
  }

  useEffect(() => {
    getOfferings().then(response => {
      setOfferings(response)
    })

    if (props.happening.offerings)
      setOfferingSelected(props.happening.offerings)

    if (props.happening.offeringsDescripton)
      setOfferingsDescripton(props.happening.offeringsDescripton)
  }, [])

  return (
    < Grid container direction="column" justify="flex-start" alignItems="center" >
      <Container maxWidth="sm" >
        <BigTitle title={"Was gibt es zu trinken?"} description={"Bitte lege fest was deine Gäste zu trinken oder essen erwartet"} />
        <Grid className={classes.container} container spacing={1}>
            {offerings.map((element, index) => {
              return (
                <Grid key={index} item xs={6}>
                  <Button className={classes.paper} onClick={handleClick} data-id={element} fullWidth size="large" variant="outlined" color="secondary">{element}</Button>
                </Grid>
              )
            })}
          </Grid>
        <Grid item xs={12} spacing={2.5}>
          <TextField
            id="outlined-multiline-static"
            label="Sonstiges"
            multiline
            rows={4}
            defaultValue="..."
            value={offeringsDescripton}
            onChange={(event) => {handleOfferingsDescription(event.target.value)}}
            variant="outlined"
            className={classes.root}
            fullWidth
          />
        </Grid>
      </Container>
    </Grid >
  );
}



export default CreateHappeningOfferings;
