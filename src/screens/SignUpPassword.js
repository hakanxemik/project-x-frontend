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
      margin: theme.spacing(3),
      textAlign: 'center',
      width: '70%'
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

function SignUpPassword(props) {

    const theme = useTheme();
    const classes = useStyles();

    let today = new Date()
    let todayTime = today.toLocaleTimeString([], { timeStyle: 'short' })
  
    const formatDate = (date) => {
      let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
      if (month.length < 2)
        month = '0' + month;
      if (day.length < 2)
        day = '0' + day;
  
      return [year, month, day].join('-');
    }
  
    const [date, setDate] = useState(formatDate(today))
  
    const handleDisableDate = (dateInput) => {
      setTimeout(function () {
        const dateFormatted = moment(dateInput, 'YYYY-MM-DD')
  
        if (dateFormatted.isBefore(today, 'year')) {
          props.handleButton(false)
          return false
        }
  
        props.handleButton(true)
        return true
      }, 100)
    }
  
    const handleDateInput = (dateInput) => {
      handleDisableDate(dateInput)
      setDate(dateInput.toString())
      props.handleDate(dateInput.toString())
    }

    useEffect(() => {
        if (props.user.birtdate) {
          setDate(props.user.birthdate)
          handleDisableDate(JSON.parse(localStorage.getItem('user')).birthdate)
        }
        else {
          handleDateInput(formatDate(today))
        }

        if (props.user.gender == '' || props.user.gender == 'Keine Angabe') {
            props.handleButton(true)
        } else {
            props.handleButton(false)
        }
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
                        label="Datum"
                        type="date"
                        value={date}
                        error={props.disable}
                        helperText={props.disable ? 'Bitte gebe ein gültigen Datum ein' : ''}
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
                <FormControl fullWidth variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Geschlecht</InputLabel>
                    <Select
                        fullWidth
                        native
                        multiple={false}
                        placeholder="Geschlecht"
                        onChange={(event) => { props.handleGender(event.target.value) }}
                        label="Geschlecht"
                    >
                        <option value={'Keine Angabe'} >Geschlecht</option> 
                        <option value={'maennlich'} >Männlich</option> 
                        <option value={'weiblich'} >Weiblich</option> 
                        <option value={'divers'} >Divers</option> 
                        
                    </Select>
                </FormControl>
            </Grid>
            </Container>
        </Grid>
    )
}

export default SignUpPassword
