import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    height: 20px;
    width:20px;
    background-image: url("single_gate.png");
    color: #1B1A55;    
    border-radius: 0.25em;
`;

const Name = styled.p`
    padding: 0.25em;
`;

const Gate = (props) => {
    const {gate} = props;
      return (
        <Container>
            <Name>{gate}</Name>
        </Container>
      );
    }
  
  export default Gate;