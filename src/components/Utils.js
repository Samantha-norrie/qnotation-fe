import styled from "styled-components";
import { createTheme } from '@mui/material/styles';

// INFO ON APP AND NOTATIONS

export const MATRIX_TITLE = "Matrix Notation";
export const DIRAC_TITLE = "Dirac Notation";
export const CIRCUIT_TITLE = "Circuit Notation";

export const QNOTATION_INFO = "Welcome to QNotation! To get started, add gates to the QuantumCircuit object that has already been created in the code\
 editor above, or choose one of the examples from the Examples dropdown.";

const MATRIX_INFO = "Matrix notation quantum states are represented as column vectors, with single-qubit states as 2x1 vectors and multi-qubit\
 states as 2^n x 1 vectors, where n is the number of qubits. Quantum gates are represented by unitary matrices, with single-qubit gates as 2x2\
  matrices and multi-qubit gates as 2^n x 2^n matrices. Operations on quantum states are performed through matrix multiplication, reading from\
   right to left. ";
const DIRAC_INFO = "Dirac notation, also known as bra-ket notation, is a standard notation used in quantum mechanics and quantum computing to\
 describe quantum states and operations. In this notation, quantum states are represented by kets, denoted as |ψ⟩, which are column vectors\
  in a complex Hilbert space. Operators are often expressed using outer products. Importantly, Dirac notation is read from right to left, \
  contrary to conventional mathematical notation.";

const CIRCUIT_INFO = "Quantum circuit notation provides a visual representation of quantum computations, read from left to right like a timeline.\
 The circuit begins on the left side, where qubits are typically initialized in their starting states.\n\n Each qubit is represented by a horizontal \
 line, with the topmost line usually denoting the first qubit (often labeled q0). As you move right along these lines, you encounter various \
 quantum gates and operations, represented by symbols or boxes, which manipulate the qubits' states. \n\nThese operations are applied sequentially in \
 the order they appear from left to right. The rightmost side of the circuit represents the final state of the qubits or their measurement outcomes.\
  This left-to-right flow mimics the progression of time in the quantum computation, making it intuitive to follow the sequence of operations applied\
  to the qubits throughout the algorithm."

export const UNKNOWN_ERROR = `You found an unknown error in QNotation! It was likely caused by a feature that hasn't been implemented yet. As this project is\
 in beta and ongoing, this issue will likely be resolved soon! A list of features currently under construction can be found on our GitHub. Happy mathing!\
\n\n-The QNotation Team`;
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

export const STARTING_CODE =
  "from qiskit import *\n\
import numpy as np \n\
qc = QuantumCircuit(3)\
\n\n\
# Insert code below \n";

const ALGORITHM_GROVER_TITLE = "GROVER'S ALGORITHM";
const ALGORITHM_GROVER_INFO = "info";
const ALGORITHM_GROVER_CODE = 
"from qiskit import *\n\
import numpy as np \n\
qc = QuantumCircuit(2)\n\
\n\n\
# Insert code below \n\
\n\
qc.h(0)\n\
qc.h(1)\n\
\n\n\
# Mark |11> as the desired state\n\
qc.cz(0, 1)\n\n\
qc.h(0)\n\
qc.h(1)\n\
qc.x(0)\n\
qc.x(1)\n\
qc.cz(0, 1)\n\
qc.x(0)\n\
qc.x(1)\n\
";

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

const ALGORITHM_QFT_TITLE = "Quantum Fourier Transform";
const ALGORITHM_QFT_INFO = "INFO";
const ALGORITHM_QFT_CODE = 
"from qiskit import *\n\
import numpy as np \n\
qc = QuantumCircuit(3)\
\n\n\
# Insert code below \n\
\n\
qc.h(2)\n\
qc.cp(np.pi/2, 1, 2)\n\
qc.cp(np.pi/4, 0, 2)\n\
qc.h(1)\n\
qc.cp(np.pi/2, 0, 1)\n\
qc.h(0)\n\
";

const ALGORITHM_HERMITIAN_TITLE = "Hermitian Example (HH = I)";
const ALGORITHM_HERMITIAN_INFO = "INFO";
const ALGORITHM_HERMITIAN_CODE = 
"from qiskit import *\n\
import numpy as np \n\
qc = QuantumCircuit(3)\
\n\n\
# Insert code below \n\
\n\
qc.h(0)\n\
qc.h(1)\n\
qc.h(2)\n\
\n\
qc.h(0)\n\
qc.h(0)\n\
qc.h(2)\n\
";
export const EXAMPLES = [
  {
    title: ALGORITHM_GROVER_TITLE,
    info: ALGORITHM_GROVER_INFO,
    code: ALGORITHM_GROVER_CODE
  },
  // {
  //   title: ALGORITHM_TELEPORTATION_TITLE,
  //   info: ALGORITHM_TELEPORTATION_INFO,
  //   code: ALGORITHM_TELEPORTATION_CODE
  // },
  {
    title: ALGORITHM_BELL_STATE_TITLE,
    info: ALGORITHM_BELL_STATE_INFO,
    code: ALGORITHM_BELL_STATE_CODE
  },
  {
    title: ALGORITHM_HERMITIAN_TITLE,
    info: ALGORITHM_HERMITIAN_INFO,
    code: ALGORITHM_HERMITIAN_CODE
  }
  // {
  //   title: ALGORITHM_QFT_TITLE,
  //   info: ALGORITHM_QFT_INFO,
  //   code: ALGORITHM_QFT_CODE
  // }
];

// CSS AND AESTHETICS
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
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
  "borderRadius": "0.25em"
};
export const SELECTED_CIRCUIT_TARGET = {
  "backgroundColor": "orangeRed",
  "borderRadius": "0.25em"
};
export const SELECTED_CIRCUIT_BETWEEN = {
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
  "borderRadius": "0.25em"
};

export const NOT_SELECTED_CIRCUIT_TARGET = {
  "color": "black",
  "backgroundColor": "white",
  "borderRadius": "0.25em"
};

export const NOT_SELECTED_CIRCUIT_BETWEEN = {
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

// HELPER FUNCTIONS

export const getStyling = (gate, selected, gateType=null) => {

  // For matrix and Dirac
  console.log("in styling", gate, selected, gateType);
  if (gateType === null) {
    if (selected && gate !== "I") {
      return SELECTED_DIRAC_MATRIX;
    } else if (selected) {
      return SELECTED_DIRAC_MATRIX_IDENTITY;
    } else if (gate !== "I") {
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

export const addTensorToDirac = (gates, index) => {


  console.log("gates", gates);
  if (gates[index].gate_type === BETWEEN_GATE_TYPE || index === gates.length-1) {
    return false;
  } else if (index < gates.length-1 && (gates[index+1].gate_type === BETWEEN_GATE_TYPE  || (gates[index].gate_type === TARGET_GATE_TYPE && gates[index+1].gate_type === CONTROL_GATE_TYPE))) {
    return false;
  } else if (index < gates.length-1 && (gates[index+1].gate_type === TARGET_GATE_TYPE && gates[index].gate_type === CONTROL_GATE_TYPE)) {
    return false;
  } else {
    return true;
  } 
}


