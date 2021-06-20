import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import UsernameInput from "../components/UsernameInput";
import NameInput from "../components/NameInput";
import PasswordInput from "../components/PasswordInput";
import PasswordConfirmation from "../components/PasswordConfirmation";
import SignUpButton from "../components/SignUpButton";
import RegisterButton from "../components/RegisterButton";
import { useHistory } from "react-router-dom";
import {register} from "../api";
import Swal from 'sweetalert2';
import { Redirect } from "react-router-dom";

function SignUp(props) {
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  let history = useHistory();
  const [user, setUser] = useState({})
  const [disableName, setDisableName] = useState(true)
  const [disableEmail, setDisableEmail] = useState(true)
  const [disablePassword, setDisablePassword] = useState(true)
  const [disableConfirmation, setDisableConfirmation] = useState(true)

  const handleField = (input) => (value) => {
    let userTmp = {...user, [input]: value};
    setUser(userTmp)
    localStorage.setItem('user', JSON.stringify(userTmp))

    if (input === 'name') {
      if (value.length > 20 || value.length < 3) {
        setDisableName(true)
      } else {
        setDisableName(false)
      }
    } else if (input === 'password') {
      if (!strongRegex.test(value)) {
        setDisablePassword(true)
      } else {
        setDisablePassword(false)
      }
    } else if (input === 'password_confirmation') {
      if (value !== user.password) {
        setDisableConfirmation(true)
      } else {
        setDisableConfirmation(false)
      }
    } else if (input === 'email') {
      if (!value) {
        setDisableEmail(true)
      } else {
        setDisableEmail(false)
      }
    }
  }

  return (
    <>
    {!localStorage.getItem('token') ?
      <Container>
        <Group2>
          <Image src={require("../assets/images/socialup_(5)_(1).png")}></Image>
          <Group>
            <MaterialIconTextbox1Column>
              <NameInput
                type="text"
                handleField={handleField('name')}
                user={user}
                style={{
                  height: 43,
                  marginTop: 31
                }}
              ></NameInput>
              <UsernameInput
                type="text"
                handleField={handleField('email')}
                user={user}
                style={{
                  height: 43,
                  marginTop: 31
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
              <PasswordConfirmation
                handleField={handleField('password_confirmation')}
                user={user}
                style={{
                  height: 43,
                  marginTop: 31
                }}
              ></PasswordConfirmation>
              <SignUpButton
                disableBtn={disableName || disablePassword || disableConfirmation }
                onClick={() => register(user).then((success) => {
                  if (!success || disableConfirmation || disableName || disablePassword || disableEmail) {
                    Swal.fire({
                      title: 'Fehler!',
                      html: (disableConfirmation || disableName || disablePassword || disableEmail) ? 'Email existiert bereits!' : 'Überprüfe deine Angaben!' ,
                      icon: 'error',
                      confirmButtonText: 'Verstanden'
                    })
                  } else {
                    history.push('/')
                  }
                })}
                style={{
                  height: 38,
                  marginTop: 25,
                  marginBottom: 35,
                  marginLeft: 4,
                  marginRight: 4
                }}
              ></SignUpButton>
            </MaterialIconTextbox1Column>
            <MaterialIconTextbox1ColumnFiller></MaterialIconTextbox1ColumnFiller>
            {disableName && <h1 className="error">Der Name muss min. 3 und max. 25 Zeichen lang sein!</h1>}
            {disablePassword && <h1 className="error">Passwort: min. ein Großbuchchstabe, ein Sonderzeichen, eine Zahl und min. 8 Zeichen!</h1>}
            {disableConfirmation && <h1 className="error">Passwort und Bestätigung stimmen nicht überrein!</h1>}
            {!user.email && <h1 className="error">Email Adresse fehlt!</h1>}
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
  margin-bottom: 350px;
  margin-top: 54px;
  align-self: center;
`;

const Image = styled.img`
  width: 200px;
  height: 100%;
  margin-top: 43px;
  align-self: center;
  object-fit: contain;
`;

const Group = styled.div`
  height: 238px;
  width: 270px;
  flex-direction: column;
  display: flex;
  margin-top: 0px;
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

export default SignUp;
