import "./App.css";

import styled from "styled-components";
import AppContainer from "./AppContainer";
const Container = styled.div`
  background-color: #070f2b;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 10% 50% 40%;
  overflow: hidden;
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

function App() {
  return <AppContainer />;
}

export default App;
