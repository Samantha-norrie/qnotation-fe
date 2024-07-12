import React from "react";
import styled from "styled-components";
import { GATE, QUBIT } from "../Utils";

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
  const { content, type} = props;

  return (
    <Container>
      {type === QUBIT && (
        <div>
          {content.map((colInstance, index) => (
            <P>{colInstance}{index < content.length-1 && <image url="/images/tensor.png"/>}</P>
          ))}
        </div>
      )}
      {type === GATE && (
        <div>
          {content.map((gateInstance) => (
            // {!gateInstance.continuation &&
              <P>{gateInstance.continuation? "":gateInstance.gate}</P>
            
          ))}
        </div>
      )}
    </Container>
  );
};

export default DiracGate;
