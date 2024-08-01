import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { NOT_SELECTED_CIRCUIT, NOT_SELECTED_CIRCUIT_IDENTITY, SELECTED_CIRCUIT, SELECTED_CIRCUIT_IDENTITY } from "../Utils";

const Container = styled.div`
  height: 20px;
  color: #ffffff;
  border-radius: 0.25em;
`;

const Name = styled.p`
  text-align: center;
  padding: 0rem 0.25rem;
`;

const Gate = (props) => {
  const {gate, selected} = props;

  return (
    <Container style={selected? gate !== "I"? SELECTED_CIRCUIT: SELECTED_CIRCUIT_IDENTITY: gate !== "I"? NOT_SELECTED_CIRCUIT: NOT_SELECTED_CIRCUIT_IDENTITY}>
      <Name>{gate}</Name>
    </Container>
  );
};

export default Gate;
