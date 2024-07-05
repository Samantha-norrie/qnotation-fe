import React from "react";
import styled from "styled-components";
import { Value } from "../Utils";

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
        <Value>{JSON.stringify(row[0])}</Value>
      ))}
    </Container>
  );
};

export default StateVector;
