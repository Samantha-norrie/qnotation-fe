import React from "react";
import Matrix from "./Matrix";
import StateVector from "./StateVector";
import { TabContainer, EquationContainer, StateContainer } from "../Utils";

const MatrixContainer = (props) => {
  const { currentIndex, setCurrentIndex, matrixEquation, matrixState } = props;
  const changeIndex = (key) => {
    setCurrentIndex(key);
    console.log("new key " + key);
  };
  return (
    <TabContainer>
      <EquationContainer>
        {matrixEquation.map((matrix, key) => (
          <div onClick={() => changeIndex(key)}>
            <Matrix
              matrix={matrix.content}
              key={key}
              currentIndex={currentIndex}
            />
          </div>
        ))}
      </EquationContainer>
      <StateContainer>
        <StateVector
          stateVector={
            matrixState.length === 0 ? [] : matrixState[currentIndex].content
          }
        />
      </StateContainer>
    </TabContainer>
  );
};

export default MatrixContainer;
