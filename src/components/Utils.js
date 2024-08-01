import styled from "styled-components";
export const MATRIX_TITLE = "Matrix";
export const DIRAC_TITLE = "Dirac";
export const CIRCUIT_TITLE = "Circuit";

const MATRIX_INFO = "Matrix notation... ";
const DIRAC_INFO = "Dirac notation... ";
const CIRCUIT_INFO = "Circuit notation...";

export const NOTATION_DETAILS = [
  {
    title: CIRCUIT_TITLE,
    info: CIRCUIT_INFO,
  },
  {
    title: DIRAC_TITLE,
    info: DIRAC_INFO,
  },
  {
    title: MATRIX_TITLE,
    info: MATRIX_INFO,
  },
];
export const TabContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 100%;
`;

export const ScrollContainer = styled.div`
  height: 200px;
  overflow-y: auto;
  display: grid;
  grid-column-start: 1;
  grid-column-end: 2;
`;
export const EquationContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
`;

export const StateContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Value = styled.p`
  padding: 0;
  margin: 0.1rem;
  display: inline;
  text-align:center;
`;

export const GATE = "GATE";
export const MEASUREMENT = "MEASUREMENT";
export const QUBIT = "QUBIT";

export const SELECTED_DIRAC_MATRIX = {
  "color": "orangeRed"
};

export const SELECTED_DIRAC_MATRIX_IDENTITY = {
  "color": "darkOrange"
};



export const NOT_SELECTED_DIRAC_MATRIX_IDENTITY = {
  "color": "grey"
};

export const NOT_SELECTED_DIRAC_MATRIX = {
  "color": "white"
};

export const SELECTED_CIRCUIT = {
  "backgroundColor": "orangeRed"
};
export const SELECTED_CIRCUIT_IDENTITY = {
  "backgroundColor": "darkOrange"
};

export const NOT_SELECTED_CIRCUIT = {
  "color": "black",
  "backgroundColor": "white"
};

export const NOT_SELECTED_CIRCUIT_IDENTITY = {
  "backgroundColor": "grey"
};

export const STARTING_CODE =
  "from qiskit import *\n\
import numpy as np \n\
qc = QuantumCircuit(3)\
\n\n\
# Insert code below \n";
