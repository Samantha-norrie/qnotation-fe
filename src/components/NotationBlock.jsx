import React from "react";
import styled from "styled-components";
import NotationHeader from "./NotationHeader";
import CircuitContainer from "./circuit/CircuitContainer";
import MatrixContainer from "./matrix/MatrixContainer";
import DiracContainer from "./dirac/DiracContainer";

const Container = styled.div`
  background-color: #040d12;
  max-height: 100%;
  min-height: 33%;
`;

const NotationBlock = (props) => {
  const {
    notationNumber,
    circuitEquationLE,
    matrixEquationLE,
    matrixTensorProductEquationLE,
    matrixStateLE,
    diracStateLE,
    circuitEquationBE,
    matrixEquationBE,
    matrixTensorProductEquationBE,
    matrixStateBE,
    diracStateBE,
    currentIndex,
    setCurrentIndex,
    displayTensorProduct,
    displayLittleEndian
  } = props;

  return (
    <Container>
      <NotationHeader notation={notationNumber} />
      {/* TODO fix */}
      {notationNumber === 0 && (
        <div>
          <CircuitContainer
            circuitDetails={displayLittleEndian? circuitEquationLE: circuitEquationBE}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      )}
      {notationNumber === 1 && (
        <DiracContainer
          diracEquation={displayLittleEndian? circuitEquationLE: circuitEquationBE}
          diracState={displayLittleEndian? diracStateLE: diracStateBE}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
      {notationNumber === 2 && (
        <div>
          <MatrixContainer
            matrixEquation={displayLittleEndian? matrixEquationLE: matrixEquationBE}
            matrixTensorProductEquation={displayLittleEndian? matrixTensorProductEquationLE: matrixTensorProductEquationBE}
            matrixState={displayLittleEndian? matrixStateLE: matrixStateBE}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            displayTensorProduct={displayTensorProduct}
          />
        </div>
      )}
    </Container>
  );
};

export default NotationBlock;
