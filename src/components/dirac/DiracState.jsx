import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-height: 10rem;
    padding-right;
    
`;
const P = styled.p`
  color: white;
  display: inline;
`;

const DiracState = (props) => {
  const { stateDetails } = props;

  return (
    <Container>
      {stateDetails.map((stateContent, index) => (
        <P>
          {stateContent.scalar}|{stateContent.bin}
          {index < stateDetails.length - 1 ? "+" : ""}
        </P>
      ))}
    </Container>
  );
};

export default DiracState;
