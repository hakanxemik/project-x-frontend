import React, { Component } from "react";
import styled, { css } from "styled-components";

function SmallTitle(props) {
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
  color: rgba(255,255,255,0.8);
  font-size: 18px;


  width: 265px;
  height: 78px;
`;

export default SmallTitle;
