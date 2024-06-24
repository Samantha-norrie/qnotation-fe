import React from 'react';
import styled from "styled-components";
import DiracGate from './DiracGate';

const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    max-height: 100%;
    flex-wrap: wrap;
    
`;

const P = styled.p`
    color: white;
`;

const DiracContainer = (props) => {
    const {diracDetails, currentIndex, setCurrentIndex} = props;
    const changeIndex = (key) => {
      setCurrentIndex(key);
      console.log("new key "+ key);
    }
      return (
        <Container>
            <P>!!!!!</P>
            {diracDetails.map((columnDetails, key) =>
                <div onClick={() => changeIndex(key)}>
                  <DiracGate content={columnDetails.content} type={columnDetails.type} key={key} currentIndex={currentIndex}/>
                </div>
                )}
        </Container>
      );
    }
  
  export default DiracContainer;