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
    setCircuitEquation,
    setMatrixEquation,
    setMatrixTensorProductEquation,
    setMatrixState,
    setDiracState,
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
    axios
      .post("http://127.0.0.1:5000/get_notation_data", {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          qc: code,
        },
      })
      .then(function (response) {
        var data = response.data;
        console.log(data);
        console.log("data!");
        if (data.status !== 200) {
          setErrorMessage(data.message);
        } else {
          setErrorMessage("");
          setCircuitEquation(data.circuit_dirac_gates);
          setMatrixEquation(data.matrix_gates);
          if (data.num_qubits <= 3) {
            console.log("in qubit IF" + data.matrix_gates_tensor_products[0]);
            setMatrixTensorProductEquation(data.matrix_gates_tensor_products);
            setDisableDisplayTensorProduct(false);
          }
          setMatrixState(data.matrix_state_vectors);
          setDiracState(data.dirac_state_vectors);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
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
