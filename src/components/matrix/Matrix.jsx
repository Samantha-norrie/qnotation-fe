import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { SELECTED, Value } from "../Utils";

const MatrixContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0.25rem;
  
  }
    
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Matrix = (props) => {
  const { matrix, key, currentIndex} = props;
  useEffect(() => {
    console.log("key" + key);
    console.log("index" + currentIndex);
  }, []);

  return (
    <MatrixContainer
      style={key === currentIndex ? SELECTED : null}
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
