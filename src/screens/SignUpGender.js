import React, { Component, useState, useEffect } from "react";
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles, useTheme } from '@material-ui/core/styles';


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
    active: {
      color: theme.palette.text.primary
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
    formControl: {
      textAlign: 'center',
      width: '100%',
      marginTop: '15%'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    inputCenter: {
      textAlign: "center"
    },
    alert: {
      color: theme.palette.text.secondary
    }
  }));

function SignUpGender(props) {

    const theme = useTheme();
    const classes = useStyles();

    let minDate = moment().subtract(18, 'years');
    let maxDate = moment().subtract(100, 'years');
  
    const [date, setDate] = useState(minDate)
    const [errorDate, setErrorDate] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
  
    const handleDisableDate = (dateInput) => {
      const dateFormatted = moment(dateInput, 'YYYY-MM-DD')

      setTimeout(function () {
        if ((!dateFormatted.isBefore(minDate) || !props.user.birthdate) && !dateFormatted.isBefore(maxDate)) {
          setErrorDate(true)
          setErrorMessage('Du musst über 18 Jahre alt sein!')
        } else if (dateFormatted.isBefore(maxDate)) {
          setErrorDate(true)
          setErrorMessage(`Bitte gib ein Geburtsdatum nach dem Jahr ${maxDate.format('YYYY')}!`)
        } else {
          setErrorDate(false)
        }
      }, 600)

      if (!errorDate && props.user.gender) {
        props.handleButton(false)
      } else {
        props.handleButton(true)
      }
    }
  
    const handleDateInput = (dateInput) => {
      handleDisableDate(dateInput)
      setDate(dateInput.toString())
      props.handleDate(dateInput.toString())
    }

    const handleSelectGender = (gender) => {
      props.handleGender(gender)

      if (!errorDate || gender) {
        props.handleButton(false)
      } else {
          props.handleButton(true)
      }
    }

    useEffect(() => {
        if (props.user.birthdate) {
          setDate(props.user.birthdate)
        }

        if (props.user.birthday == '' || props.user.gender == '' || props.user.gender == 'Keine Angabe') {
          props.handleButton(true)
        } else {
            props.handleButton(false)
        }

        console.log(errorDate)
      }, []);
    
    return (
        <Grid container direction="column" justify="flex-start" alignItems="center">
            <Container maxWidth="sm" >
                <Grid item xs={12}>
                    <BigTitle title="Weiteres über dich" />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="date"
                        fullWidth
                        label="Geburtsdatum"
                        type="date"
                        value={date}
                        error={errorDate && props.user.birthdate != ''}
                        helperText={errorDate && props.user.birthdate != '' ? errorMessage : ''}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        onChange={(event) => {
                        handleDateInput(event.target.value)
                        }
                        }
                    />
                </Grid>
                <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            >
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">Geschlecht</InputLabel>
                  <Select
                    native
                    value={props.user.gender}
                    onChange={(event) => { handleSelectGender(event.target.value) }}
                    label="Geschlecht"
                    inputProps={{
                      name: 'gender',
                      id: 'outlined-age-native-simple',
                    }}
                  >
                    <option value="" disabled>
                      &nbsp;
                    </option>
                    <option value={'maennlich'}>Männlich</option>
                    <option value={'weiblich'}>Weiblich</option>
                    <option value={'divers'}>Divers</option>
                  </Select>
                </FormControl>
            </Grid>
            </Container>
        </Grid>
    )
}

export default SignUpGender
