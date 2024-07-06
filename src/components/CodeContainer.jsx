import React, { useState } from "react";
import styled from "styled-components";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { Button } from "@mui/material";
import { STARTING_CODE } from "./Utils";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const InputContainer = styled.div`
  background-color: #040d12;
  height: 100vh;
`;

const ButtonContainer = styled.div`
    background-color: #ffffff;
    margin: 2rem;
    padding 1rem;
    display: flex;
    justify-content: space-around;

`;

const CodeContainer = (props) => {
  const {
    setCircuitEquation,
    setMatrixEquation,
    setMatrixState,
    setDiracState,
  } = props;
  const [displayTensorProduct, setDisplayTensorProduct] = useState(false);
  const [code, setCode] = useState(STARTING_CODE);

  const onCodeChange = (value, event) => {
    console.log("Updated value" + value);
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
          display_tensor_product: displayTensorProduct,
        },
      })
      .then(function (response) {
        var data = response.data;
        console.log(data);
        console.log("data!");
        setCircuitEquation(data.circuit_dirac_gates);
        setMatrixEquation(data.matrix_gates);
        setMatrixState(data.matrix_state_vectors);
        setDiracState(data.dirac_state_vectors);
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
        defaultValue={STARTING_CODE}
        onChange={onCodeChange}
      />
      <ButtonContainer>
        <Button
          variant={displayTensorProduct ? "outlined" : "contained"}
          onClick={() => setDisplayTensorProduct(!displayTensorProduct)}
        >
          Tensor
        </Button>
        <Button variant="contained" onClick={getNotationResults}>
          run
        </Button>
      </ButtonContainer>
    </InputContainer>
  );
};

export default CodeContainer;
