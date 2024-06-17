import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: pink;
    max-height: 10rem;
    padding-right;
    &:hover{
      border: 2px solid #FFFFFF;
  }
    
`;

const P = styled.p`
  color: white;
`;

const Matrix = (props) => {
    const {matrix, key} = props;
      return (
        <Container>
            {
                matrix.map((row) => 
                    <p>{JSON.stringify(row)}</p>
            )}
        </Container>
      );
    }
  
  export default Matrix;