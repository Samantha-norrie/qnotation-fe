import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    min-height: 20px;
    max-height: 40px;
    background-color: #9290C3;
    color: #1B1A55;    
    border-radius: 1em;
`;

const Value = styled.p`
    padding: 0.25em;
`;

const Qubit = (props) => {
    const {qubit} = props;
      return (
        <Container>
            <Value>|{qubit}</Value>
        </Container>
      );
    }
  
  export default Qubit;