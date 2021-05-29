import { withTheme } from "@material-ui/core";
import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import RegistrationTitle from "../components/RegistrationTitle";
import TextInput from "../components/TextInput";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import RegisterButton from "../components/RegisterButton";

function SignUp(props) {
  const [user, setUser] = useState(
    {
      firstName: '',
      lastName: ''

    }
  );
  return (
    <Container>
      <RegistrationTitleStack>
        <RegistrationTitle
          style={{
            position: "relative",
            height: 56,
            width: 240
          }}
          title="Ich bin:"
        ></RegistrationTitle>
        <TextInput
          style={{
            position: "relative",
            marginTop: 15,
            width: 265,
            height: 45,
          }}
          inputName="Vorname"
          onChange={(event) => {
            let tmpUser = user;
            tmpUser.firstName = event.target.value;
            setUser(tmpUser)
          }
          }
        ></TextInput>
        <TextInput
          style={
            {
              position: "relative",
              marginTop: 30,
              width: 265,
              height: 45,
            }
          }
          inputName="Nachname"
          onChange={(event) => {
            let tmpUser = user;
            tmpUser.lastName = event.target.value;
            setUser(tmpUser)
          }
          }
        ></TextInput>

        <RegisterButton
          style={
            {
              position: "relative",
              marginTop: 30,
              marginLeft: 0,
              width: 265,
              height: 45,
            }
          }
          title="Weiter"
        >
          <Link to="/HomeScreen">Weiterrrrr</Link>
        </RegisterButton>
      </RegistrationTitleStack >
    </Container >
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(0,0,0,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const RegistrationTitleStack = styled.div`
  width: 265px;
  height: 78px;
  margin-top: 103px;
  margin-left: 34px;
  position: relative;
`;

export default SignUp;
