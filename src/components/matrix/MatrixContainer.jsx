import React from "react";
import Matrix from "./Matrix";
import StateVector from "./StateVector";
import { useEffect } from "react";
import { TabContainer, EquationContainer, StateContainer, SELECTED_DIRAC_MATRIX, ScrollContainer } from "../Utils";

const MatrixContainer = (props) => {
  const { currentIndex, setCurrentIndex, matrixEquation, matrixTensorProductEquation, displayTensorProduct, matrixState } = props;
  const changeIndex = (key) => {
    setCurrentIndex(key);
    console.log("new key " + key);
    console.log("current index" + currentIndex);
  };
  useEffect(() => {
    console.log("in block");
    console.log("MATIX CONTAINER TENSOR" + matrixTensorProductEquation.length > 0? matrixTensorProductEquation[0]: "NONE");
  }, [matrixTensorProductEquation]);
  return (
    <TabContainer>
      <ScrollContainer>
        {/* <EquationContainer> */}
          {displayTensorProduct?
            <EquationContainer>
            {matrixTensorProductEquation.map((matrices, key) => (
              <div>
                {/* {key === 0 && 
                  <StateVector
                    stateVector={matrices}
                  />
                  // <Matrix
                  //   selected = {key === currentIndex}
                  //   matrix={matrices}
                  //   key={key}
                  //   currentIndex={currentIndex}
                  // />
                } */}
                {key > 0 && (matrices.content).map((matrix) =>(
                <EquationContainer style={key === currentIndex? SELECTED_DIRAC_MATRIX: null} onClick={() => changeIndex(key)}>
                  <Matrix
                    selected = {key === currentIndex}
                    matrix={matrix}
                    key={key}
                    currentIndex={currentIndex}
                  />
                </EquationContainer>
                ))}
              </div>
            ))}
            </EquationContainer> 
            :<EquationContainer>
            {matrixEquation.map((matrix, key) => (
              <div style={key === currentIndex? SELECTED_DIRAC_MATRIX: null} onClick={() => changeIndex(key)}>
                <Matrix
                  selected = {key === currentIndex}
                  matrix={matrix.content}
                  key={key}
                  currentIndex={currentIndex}
                />
              </div>
            ))}
            </EquationContainer>
        }
        {/* </EquationContainer> */}
      </ScrollContainer>
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
