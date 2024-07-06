import React from "react";
import { useEffect } from "react";
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
    circuitEquation,
    matrixEquation,
    matrixState,
    diracState,
    currentIndex,
    setCurrentIndex,
  } = props;

  useEffect(() => {
    console.log("in block");
    console.log("matrix in block" + diracState.length);
  }, []);

  return (
    <Container>
      <NotationHeader notation={notationNumber} />
      {/* TODO fix */}
      {notationNumber === 0 && (
        <div>
          <CircuitContainer
            circuitDetails={circuitEquation}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      )}
      {notationNumber === 1 && (
        <DiracContainer
          diracEquation={circuitEquation}
          diracState={diracState}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
      {notationNumber === 2 && (
        <div>
          <MatrixContainer
            matrixEquation={matrixEquation}
            matrixState={matrixState}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      )}
    </Container>
  );
};

export default NotationBlock;
