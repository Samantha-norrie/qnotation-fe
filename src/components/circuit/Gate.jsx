import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import gateImage from "./single_gate.png";
import { NOT_SELECTED_CIRCUIT, SELECTED_CIRCUIT } from "../Utils";

const Container = styled.div`
  height: 20px;
  width: 20px;
  color: #ffffff;
  border-radius: 0.25em;
`;

const Name = styled.p`
  padding: 0.25em;
`;

const Gate = (props) => {
  const {gate, selected} = props;

  return (
    <Container style={selected? SELECTED_CIRCUIT: NOT_SELECTED_CIRCUIT}>
      <Name>{gate}</Name>
    </Container>
  );
};

export default Gate;
