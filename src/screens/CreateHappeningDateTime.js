import React, { useEffect, useState } from "react";
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Box } from "@material-ui/core";

function CreateHappeningDateTime(props) {
  let today = new Date()
  let todayTime = today.toLocaleTimeString([], {timeStyle: 'short'})

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
  const [time, setTime] = useState(todayTime)

  const handleDateInput = (dateInput) => {
    setDate(dateInput)
    props.handleDate(dateInput)
  }

  const handleTimeInput = (timeInput) => {
    setTime(timeInput)
    props.handleTime(timeInput)
  }

  useEffect(() => {
    if (props.happening.date)
      setDate(props.happening.date)
    else
      handleDateInput(formatDate(today))
    
    if (props.happening.time)
      setTime(props.happening.time)
    else
      handleTimeInput(todayTime)
  });

  return (
    < Grid container direction="column" justify="flex-start" alignItems="center" >
      <Container maxWidth="sm" >
        <Grid item xs={12}>
          <BigTitle title={props.happening.title} description="Bitte lege die Uhrzeit und das Datum für dein Happening fest" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="date"
            fullWidth
            label="Datum"
            type="date"
            value={date}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => {
              handleDateInput(event.target.value)
            }
            }
          />
        </Grid>
        <Box mt={2}>
          <Grid item xs={12}>
            <TextField
              id="time"
              fullWidth
              label="Uhrzeit"
              type="time"
              value={time}
              InputLabelProps={{
                shrink: true,
              }}

              onChange={(event) => {
                handleTimeInput(event.target.value)
              }
              }
            />
          </Grid>
        </Box>
      </Container>
    </Grid >
  );
}



export default CreateHappeningDateTime;
