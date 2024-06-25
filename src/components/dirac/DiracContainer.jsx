import React from 'react';
import styled from "styled-components";
import DiracGate from './DiracGate';
import { EquationContainer, StateContainer, TabContainer } from '../Utils';

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
        <TabContainer>
            <EquationContainer>
                {diracDetails.map((columnDetails, key) =>
                    <div onClick={() => changeIndex(key)}>
                    <DiracGate content={columnDetails.content} type={columnDetails.type} key={key} currentIndex={currentIndex}/>
                    </div>
                )}
            </EquationContainer>
            <StateContainer>
                
            </StateContainer>
        </TabContainer>
      );
    }
  
  export default DiracContainer;