import React, { useState, useEffect } from "react";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import BigTitle from "../components/BigTitle";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(3),
    textAlign: 'center',
    width: '60%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  inputCenter: {
    textAlign: "center"
  }
}));

function CreateHappeningCategories(props) {
  const theme = useTheme();
  const classes = useStyles();

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  }

  return (
    < Grid container direction="column" justify="flex-start" alignItems="center" {...props}>
      <Container maxWidth="sm" >
        <Grid item xs={12}>
          <BigTitle title={"Kategorien"} description={"Bitte lege deine Kategorien für dein Happening fest"} />
        </Grid>
        <div className={classes.root}>
          <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <FormControl fullWidth variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Happening Typ</InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange}
                  label="Happening Typ"
                  inputProps={{
                    name: 'age',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
            </FormControl>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button fullWidth size="large" className={classes.paper} variant="outlined" color="secondary">Grillen</Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth size="large" className={classes.paper} variant="outlined" color="secondary">Party</Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth size="large" className={classes.paper} variant="outlined" color="secondary">Kulinarisch</Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth size="large" className={classes.paper} variant="outlined" color="secondary">Zocken</Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth size="large" className={classes.paper} variant="outlined" color="secondary">Erlebnis</Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Grid >
  );
}



export default CreateHappeningCategories;
