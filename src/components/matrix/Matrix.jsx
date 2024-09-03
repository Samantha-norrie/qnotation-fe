import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { NOT_SELECTED_DIRAC_MATRIX, NOT_SELECTED_DIRAC_MATRIX_IDENTITY, SELECTED_DIRAC_MATRIX, SELECTED_DIRAC_MATRIX_IDENTITY, TENSOR, Value } from "../Utils";

const MatrixContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0.25rem;
   cursor: pointer;
  }
    
`;
// TODO name
const MatrixTensorContainer = styled.div`
    display: flex;
    align-items: center;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Matrix = (props) => {
  const { matrix, addTensor, selected} = props;
  useEffect(() => {
    console.log("matrix" + matrix);
  }, [matrix]);


  return (
    <MatrixTensorContainer>
      <MatrixContainer>
        {matrix.map((row) => (
          <RowContainer>
            {row.map((value) => (<Value style={selected? value !== 0? SELECTED_DIRAC_MATRIX: SELECTED_DIRAC_MATRIX_IDENTITY: value !== 0? NOT_SELECTED_DIRAC_MATRIX: NOT_SELECTED_DIRAC_MATRIX_IDENTITY}>{value}</Value>))}
          </RowContainer>

        ))}
      </MatrixContainer>
      {
        addTensor && TENSOR
      }
    </MatrixTensorContainer>
  );
};

export default Matrix;
