import React, { Component, useState, useEffect, useRef } from "react";
import ImageUploading from 'react-images-uploading';
import Swal from 'sweetalert2';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Close from '../components/Close'
import {getUser, editProfile} from '../api';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import BigTitle from "../components/BigTitle";

function ProfileInfo(props) {
    const theme = useTheme();
    let history = useHistory();

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [bio, setBio] = useState('')
    const [user, setUser] = useState()

    const useStyles = makeStyles((theme) => ({
        profileBox: {
            height: '100%'
        },
        button: {
            fontSize: '14pt',
            textAlign: 'center',
            color: 'black',
            width: '100% !important',
            paddingTop: '4px',
            paddingBottom: '4px',
            borderRadius: '10px',
            backgroundColor: '#34E7E4',
            marginTop: '30px'
          },
          buttonDelete: {
            fontSize: '12pt',
            textAlign: 'center',
            color: 'white',
            paddingTop: '4px',
            paddingBottom: '4px',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            marginTop: '30px'
          },
          buttonUpload: {
            textAlign: 'center',
            color: 'white',
            width: '70vw !important',
            paddingTop: '4px',
            paddingBottom: '4px',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            marginTop: '30px',
            borderColor: '#34E7E4'
          },
          container: {
              marginTop: '50px',
          },
          box: {
              marginTop: '3%',
              width: '80%'
          },
          groupBtn: {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center'
          },
          description: {
            marginTop: theme.spacing(1)
          }
    }))

    const classes = useStyles();

    useEffect(() => {
        getUser().then(response => {
            setUser(response);
            setLastname(response.firstname)
            setFirstname(response.lastname)
            setBio(response.bio)
          })
    }, [])

    const handleBio = (e) => {
        setBio(e);
    }

    const handleFirstname = (e) => {
        setFirstname(e)
    }

    const handleLastname = (e) => {
        setLastname(e)
    }

    return (
        < Grid className={classes.container} container direction="column" justify="flex-start" alignItems="center" >
            <Close name={['test', 'mest']}></Close>
            <Grid style={{'marginBottom': '-20px !important'}} item xs={12}>
                <BigTitle title={"Profil bearbeiten"} description={"Hier kannst Du deine Informationen ändern"} />
            </Grid>
            <Grid className={classes.box} direction="column">
                <Grid item xs={12}>
                    <Avatar style={{ width: 150, height: 150, marginLeft: '28%' }} src={'https://socialup-api.herokuapp.com/' + props.user.avatar} />
                    <p onClick={() => {props.handleScreen()}} style={{textAlign: 'center'}}>Profilbild ändern</p>
                </Grid>
                <Grid style={{marginTop: '20px'}} item xs={12}>
                    <TextField 
                        value={firstname} 
                        onChange={(event) => {handleFirstname(event.target.value)}} 
                        id="standard-basic" 
                        label="Vorname" 
                        fullWidth
                        error={firstname == '' ? true : false}
                        helperText={firstname != '' ? '' : 'Vorname eingeben'}
                    />
                </Grid>
                <Grid style={{
                    marginTop: 20
                }} item xs={12}>
                    <TextField 
                        value={lastname} 
                        onChange={(event) => {handleLastname(event.target.value)}} 
                        id="standard-basic" 
                        label="Nachname" 
                        fullWidth
                        error={lastname  == '' ? true : false}
                        helperText={lastname != '' ? '' : 'Nachname eingeben'}
                    />
                </Grid>
                <Grid item xs={12} className={classes.description}>
                    <TextField
                    id="outlined-multiline-static"
                    label="Erzähl etwas über dich"
                    multiline
                    rows={2}
                    value={bio}
                    onChange={(event) => {handleBio(event.target.value)}}
                    variant="outlined"
                    className={classes.descBox}
                    fullWidth
                    />
                </Grid>

                <Button className={classes.button} onClick={() => editProfile({firstname: firstname, lastname: lastname, bio: bio}).then((success) => {
                    Swal.fire({
                    title: success ? 'Deine Informationen wurden geupdatet!' : 'Editierung fehlgeschlagen!',
                    text: success ? 'Du wirst automatisch auf die Startseite weitergeleitet' : 'Bitte versuche es nochmal!',
                    icon: success ? 'success' : 'error',
                    confirmButtonText: 'Verstanden'
                    }).then(function (value) {
                    console.log(value)
                    if (success)
                        history.push('/')
                    })
                })}> SPEICHERN </Button>
            </Grid>
        </Grid>
      );
    }



export default ProfileInfo;
