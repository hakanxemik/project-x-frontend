import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function SignUpButton(props) {
  return (
    <Container {...props}>
      <Button>
        <ButtonOverlay>
          <Beitreten style={{
        color: props.disableBtn ? 'red' : 'white'
      }}>BEITRETEN</Beitreten>
        </ButtonOverlay>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Button = styled.div`
  border-width: 4px;
  border-color: rgba(52,231,228,1);
  border-top-width: 0px;
  border-style: solid;
  border-right-width: 0px;
  border-left-width: 0px;
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const Beitreten = styled.span`
  font-family: 'Prompt', sans-serif;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  text-align: center;
  font-size: 18px;
  margin-top: 12px;
  margin-left: 52px;
  margin-right: 52px;
`;

export default SignUpButton;
