import React from "react";
import Matrix from "./Matrix";
import StateVector from "./StateVector";
import styled from "styled-components";
import { useEffect } from "react";
import { TabContainer, EquationContainer, StateContainer, SELECTED_DIRAC_MATRIX, ScrollContainer } from "../Utils";
import TensorProduct from "./TensorProduct";

const TensorProductContainer = styled.div`
    display: flex;
    align-items: center;

`;
const MatrixContainer = (props) => {
  const { currentIndex, setCurrentIndex, matrixEquation, matrixTensorProductEquation, displayTensorProduct, matrixState } = props;
  const changeIndex = (key) => {
    setCurrentIndex(key);
    console.log("new key " + key);
    console.log("current index" + currentIndex);
  };
  useEffect(() => {
    console.log("in block");
    console.log("MATIX CONTAINER TENSOR" + matrixTensorProductEquation != null && matrixTensorProductEquation.length > 0? matrixTensorProductEquation[0]: "NONE");
  }, [matrixTensorProductEquation]);
  return (
    <TabContainer>
      <ScrollContainer>
          {displayTensorProduct?
            <EquationContainer>
            {matrixTensorProductEquation.map((matrixSection, key) => (
              <TensorProductContainer>
                {key === 0 && 
                  <Matrix
                    onClick={() => changeIndex(key)}
                    matrix={matrixSection.content}
                    selected = {key === currentIndex}
                  />
                }
                {key > 0 && 
                  <TensorProduct onClick={() => changeIndex(key)} matrices={matrixSection.content} selected={key === currentIndex}/>
                }
              </TensorProductContainer>
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
      </ScrollContainer>
      <StateContainer>
        <StateVector
          stateVector={
            matrixState === null || matrixState.length === 0 ? [] : matrixState[currentIndex].content
          }
        />
      </StateContainer>
    </TabContainer>
  );
};

export default MatrixContainer;
