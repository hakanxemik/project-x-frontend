import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function RegisterButton(props) {
  let history = useHistory();

  return (
    <Container {...props}>
      <Button onClick={() => {
        history.push('/register')
      }}>
        <ButtonOverlay>
          <Title>{props.title}</Title>
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
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  border: none;
  font-size: 16px !important;
`;

const Title = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(168,168,168,1);
  text-align: center;
  margin-top: 9px;
  margin-left: 21px;
  margin-right: 30px;
`;

export default RegisterButton;
