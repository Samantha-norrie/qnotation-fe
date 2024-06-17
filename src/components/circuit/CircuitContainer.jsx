import React from 'react';
import styled from "styled-components";
import Column from './Column';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    max-height: 100%;
    flex-wrap: wrap;
    
`;

const CircuitContainer = (props) => {
    const {circuitDetails} = props;
    
      return (
        <Container>
            {circuitDetails.map((columnDetails, key) =>
                <div>
                  <Column content={columnDetails.content} type={columnDetails.type} key={key}/>
                </div>
                )}
        </Container>
      );
    }
  
  export default CircuitContainer;