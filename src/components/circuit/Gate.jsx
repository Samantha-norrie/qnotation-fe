import React from 'react';
import styled from "styled-components";
import gateImage from './single_gate.png';
import { useSelector } from 'react-redux';

const Container = styled.div`
    height: 20px;
    width:20px;
    background-image: url(${gateImage});
    color: #FFFFFF;    
    border-radius: 0.25em;
`;

const Name = styled.p`
    padding: 0.25em;
`;

const Gate = (props) => {
    const {gate, key} = props;
      return (
        <Container className={key == useSelector((state) => state.currentIndex.value)? "selected": ""}>
            <Name>{gate}</Name>
        </Container>
      );
    }
  
  export default Gate;