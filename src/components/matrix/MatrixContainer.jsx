import React from 'react';
import styled from "styled-components";
import Matrix from './Matrix';

const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    max-height: 100%;
    flex-wrap: wrap;
    
`;

const MatrixContainer = (props) => {
    const {matrixDetails} = props;
    
      return (
        <Container>
            {matrixDetails.map((matrix, key) =>
                <div>
                  <Matrix matrix={matrix.content} key={key}/>
                </div>
                )}
        </Container>
      );
    }
  
  export default MatrixContainer;