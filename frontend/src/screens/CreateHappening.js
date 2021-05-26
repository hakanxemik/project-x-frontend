import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import UsernameInput from "../components/UsernameInput";
import ContinueButton from "../components/ContinueButton";
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { spacing } from "@material-ui/system";
import { Box } from "@material-ui/core";
import CreateHappeningDetails from "./CreateHappeningDetails";

function CreateHappening(props) {
  const [happening, setHappening] = useState(
    {
      title: 'asdasdsadas',
      // string 12-01-2021 18:00
      date: '12-01-02 ',
      // location: {}
      location: [],
      // category: {type: 'indoor', setting: {'asdasdsa'}}
      category: [],
      // offerings: {'asdasdsa','dsfdf'}
      offerings: [],
      max_guest: 0,
      price: 0
    }
  );
  return (
    <Grid container direction="column" justify="flex-start" alignItems="center" {...props}>
      <Container maxWidth="sm" >
        <Grid item xs={12}>
          <BigTitle title="Erstelle dein Happening:" />
        </Grid>
        <Grid item xs={12}>
          <TextField id="standard-basic" label="Titel" fullWidth
            onChange={(event) => {
              let tmpHappening = happening;
              tmpHappening.title = event.target.value;
              setHappening(tmpHappening)
            }
            }
          />

        </Grid>
        <Grid item xs={12} >
          <Link to={{
            pathname: "/CreateHappeningDetails/",
            state: { happening }
          }}
          >
            <Box mt={2}>
              <Button variant="outlined" size="large" color="primary" fullWidth>
                Hi
            </Button>
            </Box>
          </Link>
        </Grid>

      </Container>

    </Grid>


    // Nameinput
    // LocationInput
  );
}



export default CreateHappening;
