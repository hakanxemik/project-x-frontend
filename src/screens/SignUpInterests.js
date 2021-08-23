import React, { Component, useState, useEffect, useMemo, useRef } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getInterests } from '../api';
import Swal from 'sweetalert2';
import { register } from '../api';
import { useHistory } from "react-router-dom";

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

function SignUpInterests(props) {
  const theme = useTheme();
  const classes = useStyles();

  const [interests, setInterests] = useState([])
  const [interestSelected, setInterestSelected] = useState([])

  let history = useHistory();

  const handleClick = (e) => {
    let input = parseInt(e.currentTarget.dataset.id)

    let interestArray = interestSelected;

    if (interestArray.includes(input)) {
      interestArray.splice(interestArray.indexOf(input), 1);
    } else {
      interestArray.push(input);
    }

    setInterestSelected(interestArray)
    props.handleInterests(interestSelected)
  }

  useEffect(() => {
    let userTmp = JSON.parse(localStorage.getItem('user'))

    console.log(userTmp)

    getInterests().then(response => {
      setInterests(response)
    })

    if (props.user.interests)
      setInterestSelected(props.user.interests)
  }, [])

  return (
    < Grid container direction="column" justify="flex-start" alignItems="center" >
      <Container maxWidth="sm" >
        <BigTitle title={"Welche interessen hast du?"} />
        <Grid className={classes.container} container spacing={1}>
          {interests.map((element, index) => {
            return (
              <Grid key={index} item xs={6}>
                <Button className={classes.paper} onClick={handleClick} data-id={parseInt(element.id)} fullWidth size="large" variant={props.user.interests && props.user.interests.includes(parseInt(element.id)) ? 'contained' : 'outlined'} color="primary">{element.name}</Button>
              </Grid>
            )
          })}
        </Grid>
        {!props.user.interests || props.user.interests.length <= 0 && <p className={classes.alert}>Bitte wähle mindestens eins aus!</p>}
        
        <Button disabled={props.disable} fullWidth style={{marginTop: 30}} onClick={() => register(props.user).then((success) => {
            Swal.fire({
            title: success ? 'Glückwunsch!' : 'Registrierung fehlgeschlagen!',
            text: success ? 'Du wirst automatisch auf die Startseite weitergeleitet' : 'Die Email Adresse existiert bereits!',
            icon: success ? 'success' : 'error',
            confirmButtonText: 'Verstanden'
            }).then(function (value) {
            console.log(value)
            if (success)
                history.push('/')
            })
        })} variant="outlined" color="primary">
        FERTIG
      </Button>
      </Container>
    </Grid >
  );
}

export default SignUpInterests;
