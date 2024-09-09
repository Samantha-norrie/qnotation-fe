import React from "react";
import Matrix from "./Matrix";
import StateVector from "./StateVector";
import styled from "styled-components";
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
  };

  return (
    <TabContainer>
      <ScrollContainer>
          {displayTensorProduct?
            <EquationContainer>
            {matrixTensorProductEquation.length > 0 && matrixTensorProductEquation.map((matrixSection, key) => (
              <TensorProductContainer>
                <div onClick={() => changeIndex(key)}>
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
                </div>
              </TensorProductContainer>
            ))}
            </EquationContainer> 
            :<EquationContainer>
            {matrixEquation.length > 0  && matrixEquation.map((matrix, key) => (
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
