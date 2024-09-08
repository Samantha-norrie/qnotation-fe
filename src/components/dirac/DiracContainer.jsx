import React from "react";
import DiracGate from "./DiracGate";
import DiracState from "./DiracState";
import styled from "styled-components";
import { SELECTED_DIRAC_MATRIX } from "../Utils";
import { EquationContainer, StateContainer, TabContainer } from "../Utils";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    cursor: pointer;
`;

const DiracContainer = (props) => {
  const { diracEquation, diracState, currentIndex, setCurrentIndex } = props;

  const changeIndex = (key) => {
    setCurrentIndex(key);
  };
  
  return (
    <TabContainer>
      <EquationContainer>
        {diracEquation.length > 0 && diracEquation.map((gateDetails, key) => (
          <Container style={key === currentIndex? SELECTED_DIRAC_MATRIX: null} onClick={() => changeIndex(key)}>
            <DiracGate
              selected = {key === currentIndex}
              content={gateDetails.content}
              type={gateDetails.type}
              key={key}
              currentIndex={currentIndex}
            />
          </Container>
        ))}
      </EquationContainer>
      <StateContainer>
        <DiracState
          stateDetails={
            diracState === null || diracState.length === 0 ? [] : diracState[currentIndex].content
          }
        />
      </StateContainer>
    </TabContainer>
  );
};

export default DiracContainer;
