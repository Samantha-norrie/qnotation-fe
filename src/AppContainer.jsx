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
  const [circuitEquationLE, setCircuitEquationLE] = useState([]);
  const [circuitEquationBE, setCircuitEquationBE] = useState([]);
  const [matrixEquationLE, setMatrixEquationLE] = useState([]);
  const [matrixEquationBE, setMatrixEquationBE] = useState([]);
  const [matrixTensorProductEquationLE, setMatrixTensorProductEquationLE] = useState([]);
  const [matrixTensorProductEquationBE, setMatrixTensorProductEquationBE] = useState([]);
  const [matrixStateLE, setMatrixStateLE] = useState([]);
  const [matrixStateBE, setMatrixStateBE] = useState([]);
  const [diracStateLE, setDiracStateLE] = useState([]);
  const [diracStateBE, setDiracStateBE] = useState([]);
  const [displayTensorProduct, setDisplayTensorProduct] = useState(false);
  const [displayLittleEndian, setDisplayLittleEndian] = useState(true);
  const [disableDisplayTensorProduct, setDisableDisplayTensorProduct] = useState(true);
  useEffect(() => {
    console.log("APP CONTAINER TENSOR" + matrixTensorProductEquationLE);
  }, [matrixTensorProductEquationLE]);
  return (
    <Container>
      <HiddenNotationsWrapper>
        <HiddenNotationsColumn
          displayTensorProduct={displayTensorProduct}
          setDisplayTensorProduct={setDisplayTensorProduct}
          displayLittleEndian={displayLittleEndian}
          setDisplayLittleEndian={setDisplayLittleEndian}
          disableDisplayTensorProduct={disableDisplayTensorProduct}
        />
      </HiddenNotationsWrapper>
      <NotationsContainerWrapper>
        <NotationsContainer
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          circuitEquationLE={circuitEquationLE}
          matrixEquationLE={matrixEquationLE}
          matrixTensorProductEquationLE={matrixTensorProductEquationLE}
          matrixStateLE={matrixStateLE}
          diracStateLE={diracStateLE}
          circuitEquationBE={circuitEquationBE}
          matrixEquationBE={matrixEquationBE}
          matrixTensorProductEquationBE={matrixTensorProductEquationBE}
          matrixStateBE={matrixStateBE}
          diracStateBE={diracStateBE}
          displayTensorProduct={displayTensorProduct}
          displayLittleEndian={displayLittleEndian}
        />
      </NotationsContainerWrapper>
      <CodeContainerWrapper>
        <CodeContainer
          setCircuitEquationLE={setCircuitEquationLE}
          setMatrixEquationLE={setMatrixEquationLE}
          setMatrixTensorProductEquationLE={setMatrixTensorProductEquationLE}
          setMatrixStateLE={setMatrixStateLE}
          setDiracStateLE={setDiracStateLE}
          setCircuitEquationBE={setCircuitEquationBE}
          setMatrixEquationBE={setMatrixEquationBE}
          setMatrixTensorProductEquationBE={setMatrixTensorProductEquationBE}
          setMatrixStateBE={setMatrixStateBE}
          setDiracStateBE={setDiracStateBE}
          setDisableDisplayTensorProduct={setDisableDisplayTensorProduct}
          // setDisplayLittleEndian={setDisplayLittleEndian}
        />
      </CodeContainerWrapper>
    </Container>
  );
};

export default AppContainer;
