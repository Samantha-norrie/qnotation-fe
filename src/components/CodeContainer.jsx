import React from 'react';
import '../App.css';
import styled from "styled-components";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { Button } from '@mui/material';
import { useDispatch} from 'react-redux';
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

const InputContainer = styled.div`
    background-color: #040D12;
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
  const {setCircuitEquation, setMatrixEquation} = props;
  const dispatch = useDispatch();

      const getNotationResults = async () => {

        axios.post("http://127.0.0.1:5000/get_notation_data", {
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
            "qc": null 
            }
          })
          .then(function (response) {
            var data = response.data;
            console.log(data);
            console.log("data!");
            // dispatch(updateCircuitGatesSlice(data.ciruit_dirac_gates));
            setCircuitEquation(data.circuit_dirac_gates);
            setMatrixEquation(data.matrix_gates);
          })
          .catch(function (error) {
            console.log(error);
          });
      };
    
      return (
        <InputContainer>
            <Editor
                height="80vh"
                language="Python"
                theme="vs-dark"
                value=""
            />
            <ButtonContainer >
              <Button variant="contained">Tensor</Button>
              <Button variant="contained" onClick={getNotationResults}>run</Button>
            </ButtonContainer >
        </InputContainer>
      );
    }
  
  export default CodeContainer;