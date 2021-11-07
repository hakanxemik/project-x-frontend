import { Input } from "@material-ui/core";
import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import Image from '../assets/images/close.svg';
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from 'react-click-away-listener';


function Logout(props) {
  let history = useHistory();
  const [contextMenu, setContextMenu] = useState(false)

  const handleContextMenu = () => {
    let contextTmp = contextMenu;

    setContextMenu(!contextTmp);
  }

  const handleClickAway = () => {
		setContextMenu(false)
	};

  return (
    <Closed className="CloseButton">
      {contextMenu &&
      <ClickAwayListener onClickAway={handleClickAway}>  
        <MenuList>
          <MenuItem >Profile</MenuItem>
          <MenuItem >My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </ClickAwayListener>
      }
        <svg onClick={handleContextMenu} class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
    </Closed>
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
`;

export default Logout;
