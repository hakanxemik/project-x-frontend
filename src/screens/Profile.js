import React, { Component, useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom"
import { logout } from '../api'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import LogoBar from '../components/LogoBar'
import NavBar from '../components/NavBar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Grid from '@material-ui/core/Grid';
import ProfileCardFlip from "../components/ProfileCardFlip";
import ProfileEdit from './ProfileEdit'
import ClickAwayListener from 'react-click-away-listener';
import Swal from 'sweetalert2';

function Profile(props) {

    const useStyles = makeStyles((theme) => ({
        profileBox: {
            height: '100%'
        }
    }))

    let history = useHistory();

    const [contextMenu, setContextMenu] = useState(false)
    
    const [profileEdit, setProfileEdit] = useState(false)

    const handleContextMenu = () => {
      let contextTmp = contextMenu;
  
      setContextMenu(!contextTmp);
    }
  
    const handleClickAway = () => {
          setContextMenu(false)
      };

    useEffect(() => {
        console.log(props.user)
    }, [])

    const styles = useStyles();
    return (
        <>
            {localStorage.getItem('token') ?
                <>
                   { !profileEdit && < Grid container direction="column" justify="flex-start" alignItems="center" >
                    <Closed className="CloseButton">
                    {contextMenu &&
                        <ClickAwayListener onClickAway={handleClickAway}>  
                            <MenuList>
                                <MenuItem onClick={setProfileEdit(true)}>Bearbeiten</MenuItem>
                                <MenuItem onClick={() => {
                                    Swal.fire({
                                        title: 'Möchtest Du dich wirklich ausloggen?',
                                        icon: 'warning',
                                        showCancelButton: true,
                                        confirmButtonColor: '#3085d6',
                                        cancelButtonColor: '#d33',
                                        cancelButtonText: 'Abbrechen',
                                        confirmButtonText: 'Abmelden'
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            localStorage.removeItem('token')
                                            logout()
                                        }
                                    })
                                }}>Abmelden</MenuItem>
                            </MenuList>
                        </ClickAwayListener>
                    }
                        <svg onClick={handleContextMenu} class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </Closed>
                        <LogoBar style={{
                            zIndex: '-100 !important'
                        }} className={styles.logobar} />
                        <ProfileCardFlip user={props.user} className={styles.profileBox}></ProfileCardFlip>
                        <NavBar></NavBar>
                    </Grid>}

                    {profileEdit && <ProfileEdit user={props.user}></ProfileEdit>}
                </>
                : <Redirect to='/login' />}
        </>
    );
}

const Closed = styled.div`
    z-index: 1000;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 35px;
    right: 25px;
    width: 30px;
    height: 30px;
    color: white;
    font-weight: 300;
    font-family: Arial, sans-serif;
`;

const MenuList = styled.div`
  position: absolute;
  z-index: 1000;
  top: 20px;
  right: 10px;
  background-color: white;
  border-radius: 5px;
  padding: 5px;
`;

const MenuItem = styled.div`
    color: black;
    padding-top: 10px;
    padding-bottom: 5px;
    padding-left: 8px;
    padding-right: 8px;
`;

export default Profile;
