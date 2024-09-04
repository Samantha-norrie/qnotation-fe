import React, { useState } from "react";
import styled from "styled-components";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { Button } from "@mui/material";
import Alert from '@mui/material/Alert';
import { STARTING_CODE } from "./Utils";
import AlgorithmSelect from "../AlgorithmSelect";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const InputContainer = styled.div`
  height: 100vh;
`;

const ButtonContainer = styled.div`
    padding 1rem;
    display: flex;
    justify-content: space-around;

`;

const CodeContainer = (props) => {
  const {
    setCircuitEquationLE,
    setMatrixEquationLE,
    setMatrixTensorProductEquationLE,
    setMatrixStateLE,
    setDiracStateLE,
    setCircuitEquationBE,
    setMatrixEquationBE,
    setMatrixTensorProductEquationBE,
    setMatrixStateBE,
    setDiracStateBE,
    setDisableDisplayTensorProduct
  } = props;
  const [code, setCode] = useState(STARTING_CODE);
  const [errorMessage, setErrorMessage] = useState("");

  const onCodeChange = (value, event) => {
    console.log("Updated value" + value);
    console.log(event);
    setCode(value);
  };

  const getNotationResults = async () => {

    setCircuitEquationBE([]);
    setCircuitEquationLE([]);
    setMatrixEquationBE([]);
    setMatrixEquationLE([]);
    setMatrixStateBE([]);
    setMatrixStateLE([]);
    setMatrixTensorProductEquationBE([]);    
    setMatrixTensorProductEquationLE([]);

    setDiracStateBE([]);
    setDiracStateLE([]);

    const response = await axios
    .post("http://127.0.0.1:5000/get_notation_data", {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        qc: code,
      },
    });

    const data = response.data;
    console.log(data);
    console.log("data!");
    if (data.status !== 200) {
      setErrorMessage(data.message);
    } else {
      setErrorMessage("");
      setCircuitEquationLE(data.circuit_dirac_gate_le);
      setCircuitEquationBE(data.circuit_dirac_gate_be);
      setMatrixEquationLE(data.matrix_gates_le);
      setMatrixEquationBE(data.matrix_gates_be);
      if (data.num_qubits <= 3) {
        setMatrixTensorProductEquationLE(data.matrix_gates_tensor_product_le);
        setMatrixTensorProductEquationBE(data.matrix_gates_tensor_product_be);
        setDisableDisplayTensorProduct(false);
      }
      setMatrixStateLE(data.matrix_state_vector_le);
      setMatrixStateBE(data.matrix_state_vector_be);
      setDiracStateLE(data.dirac_state_vector_le);
      setDiracStateBE(data.dirac_state_vector_be);
    }
    
  };

  return (
    <InputContainer>
      <Editor
        height="80vh"
        language="python"
        theme="vs-dark"
        value={code}
        onChange={onCodeChange}
      />
      <ButtonContainer>
        {errorMessage && 
          <Alert severity="error">{errorMessage}</Alert>
        }
        <Button variant="contained" onClick={getNotationResults}>
          run
        </Button>
        <AlgorithmSelect onCodeChange={onCodeChange}/>
      </ButtonContainer>
    </InputContainer>
  );
};

export default CodeContainer;
