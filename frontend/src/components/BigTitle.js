import React, { Component } from "react";
import styled, { css } from "styled-components";

function BigTitle(props) {
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
  font-size: 35px;

  margin-top: 50px;
  width: 265px;
  height: 78px;
  position: relative;
`;

export default BigTitle;
