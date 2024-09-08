import React, { useState } from "react";
import styled from "styled-components";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { Button } from "@mui/material";
import Alert from '@mui/material/Alert';
import { QNOTATION_INFO, STARTING_CODE, UNKNOWN_ERROR } from "./Utils";
import AlgorithmSelect from "../AlgorithmSelect";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import GitHubIcon from '@mui/icons-material/GitHub';
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const InputContainer = styled.div`
  height: 100vh;
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ButtonContainer = styled.div`
    padding 1rem;
    margin: 0.5rem;
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
    displayTensorProduct, 
    setDisplayTensorProduct,
    displayLittleEndian, 
    setDisplayLittleEndian,
    disableDisplayTensorProduct,
    setDisableDisplayTensorProduct
  } = props;
  const [code, setCode] = useState(STARTING_CODE);
  const [errorMessage, setErrorMessage] = useState("");

  const [openInfo, setOpenInfo] = useState(false);
  const handleOpenInfo = () => setOpenInfo(true);
  const handleCloseInfo = () => setOpenInfo(false);

  const [openError, setOpenError] = useState(false);
  const handleOpenError = () => setOpenError(true);
  const handleCloseError = () => setOpenError(false);

  const onCodeChange = (value, event) => {
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

    if (data.status !== 200) {
      setErrorMessage(data.message);
      if (data.status === 520){
        handleOpenError();
      }
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
      {errorMessage &&
          <Alert severity="error">{errorMessage}</Alert>
      }
      <Modal open={openError} onClose={handleCloseError}>
            <Box sx={style}>
            <Typography sx={{ mt: 2 }}>
            <h3>Sorry!</h3>
            <p>{UNKNOWN_ERROR}</p>
            <a href={"https://github.com/Samantha-norrie/qnotation-fe"}><GitHubIcon/></a>
          </Typography>
          </Box>
      </Modal>
      <ButtonContainer>
        <Button variant="contained" onClick={getNotationResults}>
            run
        </Button>
        <Button
            disabled={disableDisplayTensorProduct}
            variant={displayTensorProduct ? "outlined" : "contained"}
            color={"secondary"}
            onClick={() => setDisplayTensorProduct(!displayTensorProduct)}
          >
            ⊗
          </Button>
          <Button
            disabled={disableDisplayTensorProduct}
            variant={!displayLittleEndian ? "outlined" : "contained"}
            color={"secondary"}
            onClick={() => setDisplayLittleEndian(!displayLittleEndian)}
          >
            LE
          </Button>
          <InfoSharpIcon onClick={handleOpenInfo}></InfoSharpIcon>
          <Modal open={openInfo} onClose={handleCloseInfo}>
            <Box sx={style}>
              <Typography sx={{ mt: 2 }}>
              <p>{QNOTATION_INFO}</p>
            </Typography>
            </Box>
          </Modal>
        </ButtonContainer>
        <AlgorithmSelect onCodeChange={onCodeChange}/>
    </InputContainer>
  );
};

export default CodeContainer;
