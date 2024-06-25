import React from "react";
import DiracGate from "./DiracGate";
import DiracState from "./DiracState";
import { useEffect } from "react";
import { EquationContainer, StateContainer, TabContainer } from "../Utils";

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
          <div onClick={() => changeIndex(key)}>
            <DiracGate
              content={gateDetails.content}
              type={gateDetails.type}
              key={key}
              currentIndex={currentIndex}
            />
          </div>
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
