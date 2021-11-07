import React, { Component, useState } from "react";
import styled, { css } from "styled-components";

import UsernameInput from "../components/UsernameInput";
import PasswordInput from "../components/PasswordInput";
import LoginButton from "../components/LoginButton";
import RegisterButton from "../components/RegisterButton";
import { useHistory } from "react-router-dom";
import { login } from "../api";
import Swal from 'sweetalert2';
import { Redirect } from "react-router-dom";

function Login(props) {
  let history = useHistory();
  const [user, setUser] = useState({})

  const handleField = (input) => (value) => {
    let userTmp = { ...user, [input]: value };
    setUser(userTmp)
  }
  return (
    <>
      {!localStorage.getItem('token') ?
        <Container>
          <Group2>
            <Image src={require("../assets/images/socialup-min.png")}></Image>
            <Group>
              <MaterialIconTextbox1Column>
                <UsernameInput
                  handleField={handleField('email')}
                  user={user}
                  style={{
                    height: 43
                  }}
                ></UsernameInput>
                <PasswordInput
                  handleField={handleField('password')}
                  user={user}
                  style={{
                    height: 43,
                    marginTop: 31
                  }}
                ></PasswordInput>
                <LoginButton
                  onClick={() => login(user).then((success) => {
                    if (!success) {
                      Swal.fire({
                        title: 'Fehler!',
                        html: 'Passwort oder Email falsch. <br> Bitte überprüfe deine Eingaben!',
                        icon: 'error',
                        confirmButtonText: 'Verstanden'
                      })
                    } else {
                      history.push('/')
                    }
                  })}
                  style={{
                    height: 38,
                    marginTop: 35,
                    marginLeft: 4,
                    marginRight: 4
                  }}
                ></LoginButton>
              </MaterialIconTextbox1Column>
              <MaterialIconTextbox1ColumnFiller></MaterialIconTextbox1ColumnFiller>
              <RegisterButton
                style={{
                  height: 38,
                  marginLeft: 18,
                  marginRight: 18,
                  marginTop: 20
                }}
                title="Noch kein Account?"
                onClick={() => history.push('/register/')}
              ></RegisterButton>
            </Group>
          </Group2>
        </Container>
        : <Redirect to='/' />
      }
    </>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(0,0,0,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Group2 = styled.div`
  width: 284px;
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  margin-bottom: 304px;
  margin-top: 54px;
  align-self: center;
`;

const Image = styled.img`
  width: 200px;
  height: 100%;
  margin-top: 63px;
  align-self: center;
  object-fit: contain;
`;

const Group = styled.div`
  height: 238px;
  width: 270px;
  flex-direction: column;
  display: flex;
  margin-top: 40px;
  align-self: center;
`;

const MaterialIconTextbox1Column = styled.div`
  flex-direction: column;
  display: flex;
`;

const MaterialIconTextbox1ColumnFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

export default Login;
