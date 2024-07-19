import React from "react";

import styled from "styled-components";
import { SELECTED_CIRCUIT, NOT_SELECTED_CIRCUIT } from "../Utils";

const Container = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 0.25em;
`;

const Value = styled.p`
  padding: 0.25em;
`;

const Qubit = (props) => {
  const {qubit, selected} = props;
  return (
    <Container style={selected? SELECTED_CIRCUIT: NOT_SELECTED_CIRCUIT}>
      <Value>|{qubit}</Value>
    </Container>
  );
};

export default Qubit;
