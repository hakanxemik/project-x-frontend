import React, { Component } from "react";
import styled, { css } from "styled-components";

function BigTitle(props) {
  return (
    <Container {...props}>
      <Title>{props.title}</Title>
      <SmallTitle>{props.description}</SmallTitle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.span`
  font-family: Nexa Bold;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 35px;

  margin-top: 50px;
  position: relative;
`;

const SmallTitle = styled.span`
  font-family: Nexa Bold;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,0.8);
  font-size: 16px;

  margin-top: 10px;
`;

export default BigTitle;
