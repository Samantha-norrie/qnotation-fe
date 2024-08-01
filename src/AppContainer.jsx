import React, { useState } from "react";
import NotationsContainer from "./components/NotationsContainer";
import CodeContainer from "./components/CodeContainer";
import HiddenNotationsColumn from "./components/HiddenNotationsColumn";
import styled from "styled-components";
import { useEffect } from "react";

const Container = styled.div`
  background-color: #040d12;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 2% 68% 30%;
  overflow: hidden;
  color: white;
`;

const HiddenNotationsWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
`;

const NotationsContainerWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
`;

const CodeContainerWrapper = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
`;

const AppContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [circuitEquation, setCircuitEquation] = useState([]);
  const [matrixEquation, setMatrixEquation] = useState([]);
  const [matrixTensorProductEquation, setMatrixTensorProductEquation] = useState([]);
  const [matrixState, setMatrixState] = useState([]);
  const [diracState, setDiracState] = useState([]);
  const [displayTensorProduct, setDisplayTensorProduct] = useState(false);
  const [disableDisplayTensorProduct, setDisableDisplayTensorProduct] = useState(true);
  useEffect(() => {
    console.log("APP CONTAINER TENSOR" + matrixTensorProductEquation);
  }, [matrixTensorProductEquation]);
  return (
    <Container>
      <HiddenNotationsWrapper>
        <HiddenNotationsColumn
          displayTensorProduct={displayTensorProduct}
          setDisplayTensorProduct={setDisplayTensorProduct}
          disableDisplayTensorProduct={disableDisplayTensorProduct}
        />
      </HiddenNotationsWrapper>
      <NotationsContainerWrapper>
        <NotationsContainer
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          circuitEquation={circuitEquation}
          matrixEquation={matrixEquation}
          matrixTensorProductEquation={matrixTensorProductEquation}
          matrixState={matrixState}
          diracState={diracState}
          displayTensorProduct={displayTensorProduct}
        />
      </NotationsContainerWrapper>
      <CodeContainerWrapper>
        <CodeContainer
          setCircuitEquation={setCircuitEquation}
          setMatrixEquation={setMatrixEquation}
          setMatrixTensorProductEquation={setMatrixTensorProductEquation}
          setMatrixState={setMatrixState}
          setDiracState={setDiracState}
          setDisableDisplayTensorProduct={setDisableDisplayTensorProduct}
        />
      </CodeContainerWrapper>
    </Container>
  );
};

export default AppContainer;
