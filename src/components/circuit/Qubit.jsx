import React from "react";
import styled from "styled-components";
import { SELECTED_CIRCUIT_NEUTRAL, NOT_SELECTED_CIRCUIT_NEUTRAL } from "../Utils";

const Container = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 0.25em;
  grid-column-start: 1;
  grid-column-end: 2;
`;

const Value = styled.p`
  padding: 0rem 0.25rem;
  text-align: center;
  margin-block-start: 0em;
`;
const Line = styled.div`
    background-color: white;
    height: 3px;
    width: 10px;
    grid-column-start: 2;
    grid-column-end: 3;
`;
const LineCoordinator = styled.div`
    display: grid;
    grid-template-columns: 30px 10px;
    grid-template-rows: 100%;
    align-items: center;
    margin-top: 0.5em;

`;
const Qubit = (props) => {
  // index left unused for now as it will be implemented soon
  const {qubit_value, index, selected} = props;
  return (
    <LineCoordinator>
      <Container style={selected? SELECTED_CIRCUIT_NEUTRAL: NOT_SELECTED_CIRCUIT_NEUTRAL}>
        <Value> |{qubit_value}〉</Value>
      </Container>
      <Line/>
    </LineCoordinator>
  );
};

export default Qubit;
