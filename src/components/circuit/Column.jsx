import React from "react";
import styled from "styled-components";
import Gate from "./Gate";
import Qubit from "./Qubit";
import { GATE, QUBIT} from "../Utils";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    cursor: pointer; 
`;

const Column = (props) => {
  const { content, type, selected} = props;

  return (
    <Container>
      {type === QUBIT && (
        <div>
          {content.map((gateDetails, index) => (
              <Qubit qubit_value={gateDetails} index={index} selected={selected}/>
          ))}
        </div>
      )}
      {type === GATE && (
        <div>
          {content.map((gateDetails) => (
            <Gate
              gate={gateDetails.gate}
              gateType={gateDetails.gate_type}
              selected={selected}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Column;
