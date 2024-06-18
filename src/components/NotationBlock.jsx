import React from 'react';
import { useEffect } from 'react';
import '../App.css';
import styled from "styled-components";
import NotationHeader from './NotationHeader';
import CircuitContainer from './circuit/CircuitContainer';
import MatrixContainer from './matrix/MatrixContainer';
import { GATE, QUBIT } from './Utils';
import { useSelector} from 'react-redux';

const Container = styled.div`
    background-color: #040D12;
    max-height: 100%;
    min-height: 33%;
    
`;

const TEMP_CIRCUIT = [
  {content: [{qubit: "0"}, {qubit: "0"}, {qubit: "0"}], type: QUBIT, key: 0},
  {content: [{gate: "H"}, {gate: "H"}, {gate: "H"}], type: GATE, key: 1},
  {content: [{gate: "H"}, {gate: "H"}, {gate: "H"}], type: GATE, key: 2}
];

const TEMP_MATRIX = [
  {matrix: [[1],[0], [1], [0]], key: 0},
  {matrix: [[1,1,1,1],[0,0,0,0], [1,1,1,1], [0,0,0,0]], key: 1},
  {matrix: [[1,1,1,1],[0,0,0,0], [1,1,1,1], [0,0,0,0]], key: 2}
];

const NotationBlock = (props) => {
  const {notationNumber, circuitEquation, matrixEquation} = props;


  useEffect(() => {
    console.log("in block");
    console.log("matrix in block"+ matrixEquation.length);
  }, [matrixEquation]);
    
      return (
        <Container>
          <NotationHeader 
            notation={notationNumber}
          />
          {/* TODO fix */}
          {notationNumber === 0 &&
          <div>
            <CircuitContainer circuitDetails={circuitEquation}/>
          </div>
          }
          {notationNumber === 2 &&
          <div>
            <MatrixContainer matrixDetails={matrixEquation}/>
          </div>
          }
        </Container>
      );
    }
  
  export default NotationBlock;