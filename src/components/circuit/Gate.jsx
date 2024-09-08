import React from "react";
import styled from "styled-components";
import { CONTROL_GATE_TYPE, getStyling, NEUTRAL_GATE_TYPE, TARGET_GATE_TYPE } from "../Utils";

const Container = styled.div`
  color: #ffffff;
  width: 30px;
  height: 30px;
  border-radius: 0.25em;
  grid-column-start: 1;
  grid-column-end: 2;
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

const Name = styled.p`
  text-align: center;
  margin-block-start: 0em;
`;

const Gate = (props) => {
  const {gate, gateType, selected} = props;

  return (
    <LineCoordinator>
      <Container style={getStyling(gate, selected, gateType)}>
        <Name>
        {
          gateType === NEUTRAL_GATE_TYPE || gateType === CONTROL_GATE_TYPE? gate:
            (gateType === TARGET_GATE_TYPE? "🎯": "")
        }
        </Name>
      </Container>
      <Line/>
    </LineCoordinator>
  );
};

export default Gate;
