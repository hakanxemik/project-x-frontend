import React, { Component } from "react";
import styled, { css } from "styled-components";
import FeatherIcon from "react-native-vector-icons/dist/Feather";

function PasswordConfirmation(props) {
  return (
    <Container {...props}>
      <FeatherIcon
        name="lock"
        style={{
          color: "rgba(52,231,228,1)",
          fontSize: 24,
          paddingLeft: 8,
          left: 0,
          width: 32,
          top: 9,
        }}
      ></FeatherIcon>
      <InputStyle 
        type="password"
        value={props.user.password_confirmation}
        onChange={(e) => props.handleField(e.target.value)}placeholder="Passwort wiederholen"></InputStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  color: white;
  margin-left: 16px;
  padding-right: 5px;
  font-size: 16px;
  align-self: stretch;
  flex: 1 1 0%;
  line-height: 16px;
  border-color: #D9D5DC;
  padding-top: 14px;
  padding-bottom: 8px;
  left: 48px;
  width: 327px;
  top: 0px;
  border-width: 0px;
  border-bottom-width: 1px;
  border-style: solid;
  background: transparent;
  display: flex;
  flex-direction: column;
  outline: none;
`;

export default PasswordConfirmation;
