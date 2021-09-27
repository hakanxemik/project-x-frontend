import React, { Component, useState, useEffect, useRef } from "react";
import ImageUploading from 'react-images-uploading';
import Swal from 'sweetalert2';
import styled, { css } from "styled-components";
import ProfileCardFlip from "../components/ProfileCardFlip";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Close from '../components/Close'

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
            width: '70vw !important',
            paddingTop: '4px',
            paddingBottom: '4px',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            marginTop: '30px'
          },
          container: {
              marginTop: '50px'
          }
    }))

    const classes = useStyles();

    const [images, setImages] = React.useState([]);
    const [image, setImage] = React.useState(props.user.avatar);
    const [profileImage, setProfileImage] = React.useState(props.user.avatar);


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
      console.log(imageList[0]);
      setImages(imageList);
      console.log(images)
        
        let image = {}
        
        if (imageList[0]) {
            image = {
                file: imageList[0].file,
                data_url: imageList[0].data_url
            }

            setImage(image);
            setProfileImage(imageList[0].data_url)
        }
    };

    const SendImage = () => {
        if (true) {
            fetch('http://localhost:8000/api/user/profile/upload', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'X-XSRF-TOKEN': 'ZibIS4JGYO2797pWfGnYWgVwaJq4ODrcJu6xfHqA',
                    'Access-Control-Allow-Origin' : '*',
                    Origin: 'http://localhost:3000'
                },
                body: JSON.stringify(image)
            }).then((response) => response.json()).catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        < Grid className={classes.container} container direction="column" justify="flex-start" alignItems="center" >
            <Close name={['test', 'mest']}></Close>
            <ProfileCardFlip image={profileImage} className={classes.profileBox}></ProfileCardFlip>
            
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={1}
                acceptType={['jpg', 'png']}
                maxFileSize={10485760}
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
                    {!imageList[0] && <Button className={classes.button}
                    style={isDragging ? { color: 'red' } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                    >
                        Hochladen
                    </Button>}

                    {imageList.map((image, index) => (
                        <>
                            <Button className={classes.button} onClick={() => onImageUpdate(index)}>Hochladen</Button>
                            <Button onClick={() => {
                                setImage(null)
                                setProfileImage(props.user.avatar)
                                onImageRemove(index)
                            }
                            } className={classes.buttonDelete}> Löschen </Button>
                        </>
                    ))}
                </>
                )}
            </ImageUploading>

            <button onClick={() => { SendImage()}}> SAVE </button>
        </Grid>
      );
    }



export default ProfileEdit;
