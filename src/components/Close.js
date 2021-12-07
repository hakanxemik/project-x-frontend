import { Input } from "@material-ui/core";
import React, { Component } from "react";
import styled, { css } from "styled-components";
import Image from '../assets/images/close.svg';
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";


function Close(props) {
  let history = useHistory();
  
  return (
    <Closed onClick={() => {
        Swal.fire({
            title: 'Möchtest du wirklich abbrechen?',
            text: "Deine Daten werden nicht gespeichert!",
            showCancelButton: true,
            confirmButtonColor: 'transparent',
            cancelButtonColor: '#34E7E4',
            cancelButtonText: "<span style='color: black'; margin-left: 10px>Nein, zurück</span>",
            confirmButtonText: "<span style='color: black'>Ja</span>"
          }).then((result) => {
            if (result.isConfirmed) {
                props.name.forEach((element) => {
                    localStorage.removeItem(element)
                })

                history.push('/')
            }
          })
    }} className="CloseButton">
        <img width="25" height="25" src={Image}></img>
    </Closed>
  );
}

const Closed = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 15px;
    right: 15px;
    width: 45px;
    height: 45px;
    color: white;
    font-weight: 300;
    font-family: Arial, sans-serif;
`;

export default Close;
