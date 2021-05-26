import React, { Component } from "react";
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


import {
  useLocation
} from "react-router-dom";


function CreateHappeningDetails(props) {
  const location = useLocation();
  const happening = location.state.happening
  console.log(props);
  return (
    < Grid container direction="column" justify="flex-start" alignItems="center" {...props}>
      <Container maxWidth="sm" >
        <Grid item xs={12}>
          <BigTitle title={happening.title} />
        </Grid>
        <Grid item xs={12}>
          <TextField id="standard-basic" label="Datum" fullWidth />
        </Grid>
        <Grid item xs={12} >
          <Link to="/">
            <Box pt={2}>
              <Button variant="outlined" size="large" color="primary" fullWidth>
                Hi
            </Button>
            </Box>
          </Link>
        </Grid>
      </Container>
    </Grid >
  );
}



export default CreateHappeningDetails;
