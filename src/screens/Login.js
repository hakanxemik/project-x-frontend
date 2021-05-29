import React, { Component } from "react";
import styled, { css } from "styled-components";
import UsernameInput from "../components/UsernameInput";
import PasswordInput from "../components/PasswordInput";
import LoginButton from "../components/LoginButton";
import RegisterButton from "../components/RegisterButton";

function Login(props) {
  return (
    <Container>
      <Group2>
        <Image src={require("../assets/images/socialup_(5)_(1).png")}></Image>
        <Group>
          <MaterialIconTextbox1Column>
            <UsernameInput
              style={{
                height: 43
              }}
            ></UsernameInput>
            <PasswordInput
              style={{
                height: 43,
                marginTop: 31
              }}
            ></PasswordInput>
            <LoginButton
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
              marginRight: 18
            }}
            title="Noch kein Account?"
          ></RegisterButton>
        </Group>
      </Group2>
    </Container>
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
  margin-top: 154px;
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
  margin-top: 87px;
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
