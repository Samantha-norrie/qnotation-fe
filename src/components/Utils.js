import styled from "styled-components";
import { createTheme } from '@mui/material/styles';

export const MATRIX_TITLE = "Matrix Notation";
export const DIRAC_TITLE = "Dirac Notation";
export const CIRCUIT_TITLE = "Circuit Notation";

const MATRIX_INFO = "Matrix notation... ";
const DIRAC_INFO = "Dirac notation... ";

const CIRCUIT_INFO = "In circuit notation, the gates used to make up a quantum system are laid out from left to right and sit. \
\nThe qubits used in the system sit on the leftmost side of the visualization. Wires stemming from these qubits connect to the gates...";

export const NOTATION_DETAILS = [
  {
    title: CIRCUIT_TITLE,
    info: CIRCUIT_INFO
  },
  {
    title: DIRAC_TITLE,
    info: DIRAC_INFO
  },
  {
    title: MATRIX_TITLE,
    info: MATRIX_INFO
  },
];
const ALGORITHM_GROVER_TITLE = "GROVER'S ALGORITHM";
const ALGORITHM_GROVER_INFO = "info";
const ALGORITHM_GROVER_CODE = "";

const ALGORITHM_TELEPORTATION_TITLE = "QUANTUM TELEPORTATION";
const ALGORITHM_TELEPORTATION_INFO = "info";
const ALGORITHM_TELEPORTATION_CODE =
"from qiskit import *\n\
import numpy as np \n\
qc = QuantumCircuit(3)\
\n\n\
# Insert code below \n\
\n\
# Create state to teleport\n\
qc.x(0)\n\
# Start algorithm\n\
qc.h(1)\n\
qc.cx(1,2)\n\
qc.cx(0,1)\n\
qc.h(0)\n\
qc.cx(0,1)\n\
qc.cz(0,2)\n\
";

const ALGORITHM_BELL_STATE_TITLE = "BELL STATE";
const ALGORITHM_BELL_STATE_INFO = "INFO";
const ALGORITHM_BELL_STATE_CODE = 
"from qiskit import *\n\
import numpy as np \n\
qc = QuantumCircuit(2)\
\n\n\
# Insert code below \n\
\n\
qc.h(0)\n\
qc.cx(0,1)\
";

export const ALGORITHMS = [
  {
    title: ALGORITHM_GROVER_TITLE,
    info: ALGORITHM_GROVER_INFO,
    code: ALGORITHM_GROVER_CODE
  },
  {
    title: ALGORITHM_TELEPORTATION_TITLE,
    info: ALGORITHM_TELEPORTATION_INFO,
    code: ALGORITHM_TELEPORTATION_CODE
  },
  {
    title: ALGORITHM_BELL_STATE_TITLE,
    info: ALGORITHM_BELL_STATE_INFO,
    code: ALGORITHM_BELL_STATE_CODE
  }
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
  align-items: center;
  flex-wrap: wrap;
`;

export const StateContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Value = styled.p`
  // padding: 0;
  // margin: 0.1rem;
  display: inline;
  text-align:center;
`;

const Tensor = styled.p`
  color: white;
  display: inline;
`;
export const TENSOR = <Tensor>⊗</Tensor>

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

export const SELECTED_CIRCUIT_NEUTRAL = {
  "backgroundColor": "orangeRed",
  "borderRadius": "0.25em"
};
export const SELECTED_CIRCUIT_CONTROL = {
  "backgroundColor": "orangeRed",
  "borderRadius": "1em"
};
export const SELECTED_CIRCUIT_TARGET = {
  "backgroundColor": "orangeRed",
  "borderRadius": "5em"
};
export const SELECTED_CIRCUIT_BETWEEN = {
  "backgroundColor": "black",
  "borderRadius": "0.25em"
};
export const SELECTED_CIRCUIT_IDENTITY = {
  "backgroundColor": "darkOrange",
  "borderRadius": "0.25em"
};

export const NOT_SELECTED_CIRCUIT_NEUTRAL = {
  "color": "black",
  "backgroundColor": "white",
  "borderRadius": "0.25em"
};

export const NOT_SELECTED_CIRCUIT_CONTROL = {
  "color": "black",
  "backgroundColor": "white",
  "borderRadius": "1em"
};

export const NOT_SELECTED_CIRCUIT_TARGET = {
  "color": "black",
  "backgroundColor": "white",
  "borderRadius": "5em"
};

export const NOT_SELECTED_CIRCUIT_BETWEEN = {
  "color": "black",
  "backgroundColor": "black",
  "borderRadius": "0.25em"
};

export const NOT_SELECTED_CIRCUIT_IDENTITY = {
  "backgroundColor": "grey",
  "borderRadius": "0.25em"
};
export const NEUTRAL_GATE_TYPE = "NEUTRAL"
export const BETWEEN_GATE_TYPE = "BETWEEN"
export const CONTROL_GATE_TYPE = "CONTROL"
export const TARGET_GATE_TYPE = "TARGET"

export const getStyling = (gate, selected, gateType=null) => {
  // For matrix and Dirac
  console.log("in styling", gate, selected, gateType);
  if (gateType === null) {
    if (selected && gate != "I") {
      return SELECTED_DIRAC_MATRIX;
    } else if (selected) {
      return SELECTED_DIRAC_MATRIX_IDENTITY;
    } else if (gate != "I") {
      return NOT_SELECTED_DIRAC_MATRIX;
    } else {
      return NOT_SELECTED_DIRAC_MATRIX_IDENTITY;
    }
  } else {
    if (gateType === CONTROL_GATE_TYPE) {
      return selected? SELECTED_CIRCUIT_CONTROL: NOT_SELECTED_CIRCUIT_CONTROL;
    } else if (gateType === TARGET_GATE_TYPE) {
      console.log("IN CIRCUIT TARGTET");
      return selected? SELECTED_CIRCUIT_TARGET: NOT_SELECTED_CIRCUIT_TARGET;
    } else if (gateType === BETWEEN_GATE_TYPE) {
      console.log("BETWEEn");
      return selected? SELECTED_CIRCUIT_BETWEEN: NOT_SELECTED_CIRCUIT_BETWEEN;
    } else {
      if (gate === "I") {
        return selected? SELECTED_CIRCUIT_IDENTITY: NOT_SELECTED_CIRCUIT_IDENTITY;
      } else {
        return selected? SELECTED_CIRCUIT_NEUTRAL: NOT_SELECTED_CIRCUIT_NEUTRAL;
      }
    }

    }
}

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const STARTING_CODE =
  "from qiskit import *\n\
import numpy as np \n\
qc = QuantumCircuit(3)\
\n\n\
# Insert code below \n";


