import { Input } from "@material-ui/core";
import React, { Component } from "react";
import styled, { css } from "styled-components";
import Image from '../assets/images/close.svg';
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";


function Logout(props) {
  let history = useHistory();
  
  return (
    <Closed className="CloseButton">
        <svg onClick={() => {
        Swal.fire({
            title: 'Möchtest du dich ausloggen?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Nein, zurück',
            confirmButtonText: 'Ja'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch('http://localhost:8000/api/logout', 
                {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Accept': '*/*',
                    'Content-Type': 'application/json',
                    'X-XSRF-TOKEN': 'NIBj1PwrLnjGWhiAjho4RawzlaxalIuzJ3NVjKgL'
                },
                body: ''}
                ).then((response) => {
                    console.log(response)
                })

                localStorage.removeItem('token')
                localStorage.removeItem('user')
                
                history.push('/')
            }
          })
    }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
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

export default Logout;
