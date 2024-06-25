import React from "react";
import styled from "styled-components";
import Gate from "./Gate";
import Qubit from "./Qubit";
import { GATE, QUBIT } from "../Utils";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 10rem;
    padding-right;
    &:hover{
      border: 2px solid #FFFFFF;
  }
    
`;

const Column = (props) => {
  const { content, type, key, currentIndex } = props;

  return (
    <Container>
      {type === QUBIT && (
        <div>
          {content.map((colInstance) => (
            <Qubit qubit={colInstance} key={key} currentIndex={currentIndex} />
          ))}
        </div>
      )}
      {type === GATE && (
        <div>
          {content.map((colInstance) => (
            <Gate
              gate={colInstance.gate}
              key={key}
              currentIndex={currentIndex}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Column;
