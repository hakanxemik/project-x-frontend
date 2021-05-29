import React, { Component } from "react";
import styled, { css } from "styled-components";

function RegistrationTitle(props) {
  return (
    <Container {...props}>
      <Title>{props.title}</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-family: Nexa Bold;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 56px;
  width: 240px;
  font-size: 35px;
`;

export default RegistrationTitle;
