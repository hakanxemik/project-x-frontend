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
    padding: theme.spacing(0.25),
    textAlign: 'center',
    color: theme.palette.primary,
    borderRadius: "10px",
    height: '45px'
  },
  formControl: {
    textAlign: 'center',
    width: '100%',
    marginBottom: '50px'
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

function CreateHappeningCategories(props) {
  const theme = useTheme();
  const classes = useStyles();

  const [shrink, setShrink] = useState(false)

  const handleCategoryInput = (e) => {
    if (!props.happening.category)
      props.handleButton(false)

    props.handleCategory(parseInt(e.currentTarget.dataset.id))
  }

  useEffect(() => {
    let happeningTmp = JSON.parse(localStorage.getItem('happening'))

    if (!happeningTmp.category)
      props.handleButton(true)
    else
      props.handleButton(false)
  }, [])

  return (
    < Grid container direction="column" justify="flex-start" alignItems="center" >
      <Container maxWidth="sm" >
        <Grid item xs={12}>
          <BigTitle title={"Kategorien"} description={"Bitte lege deine Kategorien für dein Happening fest"} />
        </Grid>
        <div className={classes.root}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <FormControl fullWidth variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Happening Typ</InputLabel>
              <Select
                native
                multiple={false}
                defaultValue=""
                onChange={(event) => { props.handleHappeningType(parseInt(event.target.value)) }}
                label="Happening Typ"
              > 
                {props.types.map((element, index) => {
                  return <option key={index} selected={props.happening.type == element.id ? true : false} value={element.id}>{element.name}</option>
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid container spacing={2}>
            {props.categories.map((element, index) => {
              return (
                <Grid key={index} item xs={6}>
                  <Button variant={(props.happening.category == element.id) ? 'contained' : 'outlined'}  color="primary" className={classes.paper} data-id={element.id} onClick={handleCategoryInput.bind(this)} fullWidth size="large" color="primary">{element.name}</Button>
                </Grid>
              )
            })}
          </Grid>

          {!props.happening.category && <p className={classes.alert}>Bitte wähle eine Kategorie aus</p>}
        </div>
      </Container>
    </Grid >
  );
}



export default CreateHappeningCategories;
