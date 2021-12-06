import React, { Component, useState, useEffect, useRef } from "react";
import ImageUploading from 'react-images-uploading';
import Swal from 'sweetalert2';
import styled, { css } from "styled-components";
import ProfileCardFlip from "../components/ProfileCardFlip";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Close from '../components/Back'

function ProfileEdit(props) {
    const theme = useTheme();

    const useStyles = makeStyles((theme) => ({
        profileBox: {
            height: '100%'
        },
        button: {
            fontSize: '14pt',
            textAlign: 'center',
            color: 'black',
            width: '70vw !important',
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
              marginTop: '50px'
          },
          groupBtn: {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center'
          }
    }))

    const classes = useStyles();

    const [images, setImages] = React.useState([]);
    const [image, setImage] = React.useState('http://localhost:8000' + props.user.avatar);
    const [profileImage, setProfileImage] = React.useState('');


    const handleImage = (file) => {
        if (file.size > 10485760) {
            Swal.fire({
                title: 'Bild zu groß!',
                text: "Bitte wähle ein Foto aus welches nicht über 10mb ist!",
                icon: 'error'
              });
            
            return false;
        } else if(file.type !== 'image/jpeg' || file.type !== 'image/png') {
            Swal.fire({
                title: 'Falscher Datentyp!',
                text: "Bitte wähle ein Foto mit dem richtigen Datentyp aus (jpg oder png)!",
                icon: 'error'
              });

            return false;
        }

        return true;
    }
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      setImages(imageList);
        
        let image = {
            file: imageList[0].file
        }
  
        setImage(image);
        setProfileImage(imageList[0].data_url)

        console.log(image)
    };

    const SendImage = (upload) => {

        if (true) {
            fetch('https://socialup-api.herokuapp.com/api/user/profile/upload', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'X-XSRF-TOKEN': 'ZibIS4JGYO2797pWfGnYWgVwaJq4ODrcJu6xfHqA',
                    'Access-Control-Allow-Origin' : '*'
                },
                body: JSON.stringify({
                    file: upload.data_url
                })
            }).then((response) => {
                Swal.fire({
                    title: 'Profilbild wurde aktualisiert',
                    icon: 'success'
                })
            }).catch((err) => {
                Swal.fire({
                    title: 'Profilbild konnte nicht hochgeladen werden!',
                    icon: 'error'
                })
            })
        }
    }

    return (
        < Grid className={classes.container} container direction="column" justify="flex-start" alignItems="center" >
            <Close back={props.handleBack} name={['test', 'mest']}></Close>
            <ProfileCardFlip profileImage={profileImage} className={classes.profileBox}></ProfileCardFlip>
            
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={1}
                acceptType={['jpg', 'png']}
                dataURLKey="data_url"
            >
                {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
                }) => (
                // write your building UI
                <>
                    {!imageList[0] && <Button className={classes.buttonDelete}
                    style={isDragging ? { color: 'red' } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                    >
                        Bild Hochladen
                    </Button>}

                    {imageList.map((image, index) => (
                        <>
                            <div className={classes.groupBtn}>
                                <Button className={classes.buttonDelete} onClick={() => onImageUpdate(index)}>Neu</Button>
                                <Button onClick={() => {
                                    setImage(null)
                                    setProfileImage(props.user.avatar)
                                    onImageRemove(index)
                                }
                                } className={classes.buttonDelete}> Löschen </Button>
                            </div>
                        </>
                    ))}

                    <Button className={classes.button} onClick={() => { SendImage(imageList[0])}}> SPEICHERN </Button>
                </>
                )}
            </ImageUploading>
        </Grid>
      );
    }



export default ProfileEdit;
