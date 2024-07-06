import React from "react";
import DiracGate from "./DiracGate";
import DiracState from "./DiracState";

import styled from "styled-components";
import { useEffect } from "react";
import { SELECTED } from "../Utils";
import { EquationContainer, StateContainer, TabContainer } from "../Utils";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`;

const DiracContainer = (props) => {
  const { diracEquation, diracState, currentIndex, setCurrentIndex } = props;
  useEffect(() => {
    console.log("dirac state in DiracContainer" + diracState.length);
  }, []);
  const changeIndex = (key) => {
    setCurrentIndex(key);
    console.log("new key " + key);
  };
  return (
    <TabContainer>
      <EquationContainer>
        {diracEquation.map((gateDetails, key) => (
          <Container style={key === currentIndex? SELECTED: null} onClick={() => changeIndex(key)}>
            <DiracGate
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
            diracState.length === 0 ? [] : diracState[currentIndex].content
          }
        />
      </StateContainer>
    </TabContainer>
  );
};

export default DiracContainer;
