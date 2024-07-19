import React from "react";
import styled from "styled-components";
import Gate from "./Gate";
import Qubit from "./Qubit";
import { GATE, QUBIT} from "../Utils";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 10rem;
    margin: .25rem; 
`;

const Column = (props) => {
  const { content, type, selected} = props;

  return (
    <Container>
      {type === QUBIT && (
        <div>
          {content.map((colInstance) => (
            <Qubit qubit={colInstance} selected={selected}/>
          ))}
        </div>
      )}
      {type === GATE && (
        <div>
          {content.map((colInstance) => (
            <Gate
              gate={colInstance.gate}
              selected={selected}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Column;
