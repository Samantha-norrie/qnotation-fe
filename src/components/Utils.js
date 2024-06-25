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
export const EquationContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  max-height: 100%;
  flex-wrap: wrap;
  grid-column-start: 1;
  grid-column-end: 2;
  padding: 1rem;
`;

export const StateContainer = styled.div`
  border-left: solid white;
`;

export const GATE = "GATE";
export const MEASUREMENT = "MEASUREMENT";
export const QUBIT = "QUBIT";

export const STARTING_CODE =
  "from qiskit import *\n\
import numpy as np \n\
qc = QuantumCircuit(3)\
\n\n\
# Insert code below \n";
