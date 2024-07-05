import React from "react";
import styled from "styled-components";
import { Value } from "../Utils";

const MatrixContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 10rem;
    margin: 0.25rem;
    color: white;
  
  }
    
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Matrix = (props) => {
  const { matrix, key, currentIndex} = props;

  return (
    <MatrixContainer
      className={key === currentIndex ? "selected" : ""}
    >
      {matrix.map((row) => (
        <RowContainer>
          {row.map((value) => (<Value>{value}</Value>))}
        </RowContainer>

      ))}
    </MatrixContainer>
  );
};

export default Matrix;
