import React, { Component } from "react";
import styled, { css } from "styled-components";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";

function UsernameInput(props) {
  return (
    <Container {...props}>
      <FontAwesomeIcon
        name="user-circle-o"
        style={{
          color: "rgba(52,231,228,1)",
          fontSize: 24,
          paddingLeft: 8
        }}
      ></FontAwesomeIcon>
      <InputStyle placeholder="E-Mail Adresse"></InputStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  margin-left: 16px;
  padding-right: 5px;
  font-size: 16px;
  align-self: stretch;
  flex: 1 1 0%;
  line-height: 16px;
  padding-top: 14px;
  padding-bottom: 8px;
  border-width: 0px;
  border-color: rgba(255,255,255,1);
  border-bottom-width: 1px;
  border-style: solid;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export default UsernameInput;
