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
import '../index.css'

function SignUpInterests(props) {
  const theme = useTheme();

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
      }
    },
    paper: {
      padding: theme.spacing(0.15),
      textAlign: 'center',
      color: theme.palette.primary,
      borderRadius: "25px",
      minWidth: '80px',
    },
    button: {
      fontSize: '16pt',
      textAlign: 'center',
      color: 'black',
      width: '350px !important',
      paddingTop: '4px',
      paddingBottom: '4px',
      borderRadius: '10px',
      position: 'absolute',
      bottom: '60px',
      backgroundColor: props.user.interests.length < 3 || props.user.interests.length > 5 ? '#7f8c8d' : '#34E7E4'
    },
    containerInterest: {
      height: '53vh',
      overflow: 'auto'
    },
    description: {
      borderColor: 'rgba(52, 231, 228, 0.5)'
    },
    textField: {
      marginTop: theme.spacing(0.5)
    },
    desc: {
      marginTop: '10px'
    },
    interest: {
      padding: '0px !important',
      margin: '4px'
    },
    counter: {
      color: props.user.interests.length < 3 || props.user.interests.length > 5 ? '#e74c3c' : '#34E7E4'
    }
  }));

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
    getInterests().then(response => {
      setInterests(response)
    })

    if (props.user.interests)
      setInterestSelected(props.user.interests)
  }, [])

  const classes = useStyles();

  const disableButton = () => {
    (props.user.interests.length < 3 || props.user.interests.length > 5) ? props.handleButton(true) : props.handleButton(false)
  }

  return (
    < Grid container direction="column" justify="flex-start" alignItems="center" >
      <Container maxWidth="sm" >
        <BigTitle style={{
          marginBottom: -17
        }} title={"Welche interessen hast du?"} />
        <p className={classes.counter} style={{marginBottom: 20}}>Interessen ausgewählt {props.user.interests.length}/5</p>

        <Grid className={classes.containerInterest} container spacing={1}>
          {interests.map((element, index) => {
            return (
              <Grid className={classes.interest} key={index} item xs={element.name.length > 5 ? 4 : 3}>
                <Button className={classes.paper} onClick={(e) => {
                  handleClick(e)
                  disableButton()
                }} data-id={parseInt(element.id)} fullWidth size="large" variant={props.user.interests && props.user.interests.includes(parseInt(element.id)) ? 'contained' : 'outlined'} color="primary">{element.name}</Button>
              </Grid>
            )
          })}
        </Grid>
     </Container>
     <Container className={classes.error}>
     </Container>
     <Button className={classes.button} disabled={props.user.interests.length < 3 || props.user.interests.length > 5} onClick={() => register(props.user).then((success) => {
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
          Jetzt beitreten!
      </Button>
    </Grid >
  );
}

export default SignUpInterests;
