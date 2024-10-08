import React from "react";
import styled from "styled-components";
import { addTensorToDirac, GATE, QUBIT, TENSOR } from "../Utils";
import { SELECTED_DIRAC_MATRIX, SELECTED_DIRAC_MATRIX_IDENTITY, NOT_SELECTED_DIRAC_MATRIX, NOT_SELECTED_DIRAC_MATRIX_IDENTITY } from "../Utils";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 10rem;
    padding: 0.25rem;
`;
const InlineP = styled.p`
  display: inline;
`;

const DiracGate = (props) => {
  const { content, type, selected} = props;

  return (
    <Container>
      {type === QUBIT && (
        <div>
          <p>
            |{content.map((colInstance) => (
            <InlineP>{colInstance}</InlineP>
          ))}
          〉</p>
        </div>
      )}
      {type === GATE && (
        <div>
          {content.map((gateInstance, index) => (
              <InlineP style={selected? gateInstance.gate !== "I"? 
                SELECTED_DIRAC_MATRIX: SELECTED_DIRAC_MATRIX_IDENTITY: 
                  gateInstance.gate !== "I"? NOT_SELECTED_DIRAC_MATRIX: NOT_SELECTED_DIRAC_MATRIX_IDENTITY}
              >
                {gateInstance.continuation? "":gateInstance.gate}
                {addTensorToDirac(content, index) && TENSOR}
              </InlineP>
            
          ))}
        </div>
      )}
    </Container>
  );
};

export default DiracGate;
