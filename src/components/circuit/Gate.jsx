import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { getStyling, NOT_SELECTED_CIRCUIT, NOT_SELECTED_CIRCUIT_IDENTITY, SELECTED_CIRCUIT, SELECTED_CIRCUIT_IDENTITY } from "../Utils";

const Container = styled.div`
  color: #ffffff;
`;

const Name = styled.p`
  text-align: center;
  padding: 0rem 0.25rem;
`;

const Gate = (props) => {
  const {gate, gateType, selected} = props;

  return (
    <Container style={getStyling(gate, selected, gateType)}>
      <Name>{gate}</Name>
    </Container>
  );
};

export default Gate;
