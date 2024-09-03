import React from "react";

import styled from "styled-components";
import { SELECTED_CIRCUIT_NEUTRAL, NOT_SELECTED_CIRCUIT_NEUTRAL } from "../Utils";

const Container = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 0.25em;
`;

const Value = styled.p`
  padding: 0rem 0.25rem;
  text-align: center;
`;

const Qubit = (props) => {
  const {qubit_value, index, selected} = props;
  return (
    <Container style={selected? SELECTED_CIRCUIT_NEUTRAL: NOT_SELECTED_CIRCUIT_NEUTRAL}>
      <Value> |{qubit_value}〉</Value>
    </Container>
  );
};

export default Qubit;
