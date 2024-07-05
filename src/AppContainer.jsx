import React, { useState } from "react";
import NotationsContainer from "./components/NotationsContainer";
import CodeContainer from "./components/CodeContainer";
import HiddenNotationsColumn from "./components/HiddenNotationsColumn";
import styled from "styled-components";

const Container = styled.div`
  background-color: #070f2b;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 10% 50% 40%;
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
  const [matrixState, setMatrixState] = useState([]);
  const [diracState, setDiracState] = useState([]);
  return (
    <Container>
      <HiddenNotationsWrapper>
        <HiddenNotationsColumn />
      </HiddenNotationsWrapper>
      <NotationsContainerWrapper>
        <NotationsContainer
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          circuitEquation={circuitEquation}
          matrixEquation={matrixEquation}
          matrixState={matrixState}
          diracState={diracState}
        />
      </NotationsContainerWrapper>
      <CodeContainerWrapper>
        <CodeContainer
          setCircuitEquation={setCircuitEquation}
          setMatrixEquation={setMatrixEquation}
          setMatrixState={setMatrixState}
          setDiracState={setDiracState}
        />
      </CodeContainerWrapper>
    </Container>
  );
};

export default AppContainer;
