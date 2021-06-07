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
import {getCategories, getTypes} from '../api';


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
  active: {
    color: theme.palette.text.secondary
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
  }
}));

function CreateHappeningCategories(props) {
  const theme = useTheme();
  const classes = useStyles();

  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('')

  const [types, setTypes] = useState([])
  const [type, setType] = useState([])

  const [shrink, setShrink] = useState(false)

  const handleTypeInput = (typeInput) => {
    setType(typeInput)
    props.handleHappeningType(typeInput)

    setShrink(true)
  }

  const handleCategoryInput = (e) => {
    props.handleCategory(e.currentTarget.dataset.id)
    setCategory(e.currentTarget.dataset.id)
  }

  useEffect(() => {
    getCategories().then(response => {
      setCategories(response)
    });

    getTypes().then(response => {
      setTypes(response)
    })

    if (props.happening.type) {
      setType(props.happening.type)
      setShrink(true)
    }

    if (props.happening.category)
      setCategory(props.happening.category)
  }, [])

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
              <InputLabel shrink="true" focu="true" htmlFor="outlined-age-native-simple">Happening Typ</InputLabel>
                <Select
                  native
                  multiple={false}
                  value={type}
                  onChange={(event) => {handleTypeInput(event.target.value)}}
                  label="Happening Typ"
                  inputProps={{
                    id: 'outlined-age-native-simple'
                  }}
                  InputLabelProps={{ shrink: true }} 
                >
                  {types.map((element, index) => {
                      return <option key={index} value={element}>{element.toUpperCase()}</option>
                  })}
                </Select>
            </FormControl>
          </Grid>
          <Grid container spacing={2}>
            {categories.map((element, index) => {
              return (
                <Grid key={index} item xs={6}>
                  <Button className={(element == category ? classes.active : ''), classes.paper} data-id={element}  onClick={handleCategoryInput.bind(this)}  fullWidth size="large" variant="outlined" color="secondary">{element}</Button>
                </Grid>
              )
            })}
            
          </Grid>
        </div>
      </Container>
    </Grid >
  );
}



export default CreateHappeningCategories;
