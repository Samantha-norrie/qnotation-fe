import React from "react";
import styled from "styled-components";
import { NOT_SELECTED_DIRAC_MATRIX, NOT_SELECTED_DIRAC_MATRIX_IDENTITY, Value } from "../Utils";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 10rem;
    padding-right;
    color: white;
  }
    
`;

const StateVector = (props) => {
  const { stateVector } = props;

  return (
    <Container>
      {stateVector.map((row) => (
        <Value style={row[0] !== 0? NOT_SELECTED_DIRAC_MATRIX: NOT_SELECTED_DIRAC_MATRIX_IDENTITY}>{JSON.stringify(row[0])}</Value>
      ))}
    </Container>
  );
};

export default StateVector;
