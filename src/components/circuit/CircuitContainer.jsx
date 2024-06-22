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
    const {circuitDetails, currentIndex, setCurrentIndex} = props;
    const changeIndex = (key) => {
      setCurrentIndex(key);
      console.log("new key "+ key);
    }
      return (
        <Container>
            {circuitDetails.map((columnDetails, key) =>
                <div onClick={() => changeIndex(key)}>
                  <Column content={columnDetails.content} type={columnDetails.type} key={key} currentIndex={currentIndex}/>
                </div>
                )}
        </Container>
      );
    }
  
  export default CircuitContainer;