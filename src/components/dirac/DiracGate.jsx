import React from "react";
import styled from "styled-components";
import { GATE, QUBIT } from "../Utils";
import { SELECTED_DIRAC_MATRIX, SELECTED_DIRAC_MATRIX_IDENTITY, NOT_SELECTED_DIRAC_MATRIX, NOT_SELECTED_DIRAC_MATRIX_IDENTITY } from "../Utils";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 10rem;
`;
const P = styled.p`
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
            <P>{colInstance}</P>
          ))}
          〉</p>
        </div>
      )}
      {type === GATE && (
        <div>
          {content.map((gateInstance, index) => (
              <P style={selected? gateInstance.gate !== "I"? 
                SELECTED_DIRAC_MATRIX: SELECTED_DIRAC_MATRIX_IDENTITY: 
                  gateInstance.gate !== "I"? NOT_SELECTED_DIRAC_MATRIX: NOT_SELECTED_DIRAC_MATRIX_IDENTITY}
              >
                {gateInstance.continuation? "":gateInstance.gate}
                {index < content.length-1 && !gateInstance.continuation && " X "}
              </P>
            
          ))}
        </div>
      )}
    </Container>
  );
};

export default DiracGate;
