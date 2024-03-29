import { Input } from "@material-ui/core";
import React, { Component } from "react";
import styled, { css } from "styled-components";


function TextInput(props) {
  return (
    <Container {...props}>
      <InputStyle placeholder={props.inputName}></InputStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-bottom-width: 2px;
  border-color: #D9D5DC;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  padding-right: 5px;
  font-size: 16px;
  align-self: stretch;
  flex: 1 1 0%;
  line-height: 16px;
  padding-top: 16px;
  padding-bottom: 8px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid white;
  &:focus{
    outline: none;
    border-color: #34E7E4;
  }
`;

export default TextInput;
