import React from 'react';
import styled from "styled-components";
import Matrix from './Matrix';
import StateVector from './StateVector';

const TabContainer = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 100%;
`;
const EquationContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    max-height: 100%;
    flex-wrap: wrap;
    grid-column-start: 1;
    grid-column-end: 2;
    padding: 1rem;
    
`;
const StateContainer = styled.div`
  border-left: solid white;
`;

const MatrixContainer = (props) => {
    const {currentIndex, setCurrentIndex, matrixEquation, matrixState} = props;
    const changeIndex = (key) => {
      setCurrentIndex(key);
      console.log("new key "+ key);
    }
      return (
        <TabContainer>
          <EquationContainer>
              {matrixEquation.map((matrix, key) =>
                  <div onClick={() => changeIndex(key)}>
                    <Matrix 
                      matrix={matrix.content} 
                      key={key} 
                      currentIndex={currentIndex}
                    />
                  </div>
                  )}
          </EquationContainer>
          <StateContainer>
                <StateVector stateVector={matrixState.length === 0? []: matrixState[currentIndex].content}/>
          </StateContainer>
        </TabContainer>
      );
    }
  
  export default MatrixContainer;