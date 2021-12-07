import React, { Component, useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom"
import { getUser, logout } from '../api'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import LogoBar from '../components/LogoBar'
import NavBar from '../components/NavBar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Grid from '@material-ui/core/Grid';
import ProfileCardFlip from "../components/ProfileCardFlip";
import ProfileInfo from './ProfileInfo'
import ProfileEdit from './ProfileEdit'
import ClickAwayListener from 'react-click-away-listener';
import Swal from 'sweetalert2';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Profile(props) {

    const useStyles = makeStyles((theme) => ({
        profileBox: {
            height: '100%'
        },
        menu: {
            width: '150px'
        },
        menuItem: {
            borderBottom: '1px solid black', 
            display: 'flex', 
            justifyContent: 'space-around',
            padding: '15px'
        },
        menuItem2: { 
            display: 'flex', 
            justifyContent: 'space-around',
            padding: '15px' 
        }
    }))

    let history = useHistory();

    const [contextMenu, setContextMenu] = useState(false)
    
    const [profileEdit, setProfileEdit] = useState(false)
    const [profileInfo, setProfileInfo] = useState(false)

    const handleContextMenu = () => {
      let contextTmp = contextMenu;
  
      setContextMenu(!contextTmp);
    }
  
    const handleClickAway = () => {
          setContextMenu(false)
    };

    const handleScreen = () => {
        setProfileInfo(false)
        setProfileEdit(true)
    }

    const handleBack = () => {
        setProfileInfo(false)
        setProfileEdit(false)
    }

    const styles = useStyles();
    return (
        <>
            {localStorage.getItem('token') ?
                <>
                   { !profileEdit && !profileInfo && < Grid container direction="column" justify="flex-start" alignItems="center" >
                    <Menu className="CloseButton">
                    {contextMenu &&
                        <ClickAwayListener onClickAway={handleClickAway}>  
                            <MenuList className={styles.menu}>
                                <MenuItem className={styles.menuItem} onClick={(e) => {
                                    e.stopPropagation();
                                    setProfileInfo(true);
                                }}>Bearbeiten <EditIcon fontSize="small"></EditIcon></MenuItem>
                                <MenuItem className={styles.menuItem2} onClick={(e) => {
                                    e.stopPropagation();
                                    Swal.fire({
                                        title: "<h3 style='color: black'>Möchtest Du dich wirklich ausloggen?</h3>",
                                        showCancelButton: true,
                                        confirmButtonColor: 'transparent',
                                        cancelButtonColor: '#34E7E4',
                                        cancelButtonText: "<span style='color: black'>Abbrechen</span>",
                                        confirmButtonText: "<span style='color: black'>Abmelden</span>"
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            localStorage.removeItem('token')
                                            logout()
                                        }
                                    })
                                }}>Abmelden <ExitToAppIcon fontSize="small"></ExitToAppIcon></MenuItem>
                            </MenuList>
                        </ClickAwayListener>
                    }
                        <SettingsIcon fontSize="large" onClick={handleContextMenu}></SettingsIcon>
                    </Menu>
                        <LogoBar style={{
                            zIndex: '-100 !important'
                        }} className={styles.logobar} />
                        <ProfileCardFlip user={props.user} className={styles.profileBox}></ProfileCardFlip>
                        <NavBar></NavBar>
                    </Grid>}
                    
                    {profileInfo && !profileEdit && <ProfileInfo user={props.user} handleBack={handleBack} handleScreen={handleScreen}></ProfileInfo>}
                    {!profileInfo && profileEdit && <ProfileEdit handleBack={handleBack} user={props.user}></ProfileEdit>}
                </>
                : <Redirect to='/login' />}
        </>
    );
}

const Menu = styled.div`
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
