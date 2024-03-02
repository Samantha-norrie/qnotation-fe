import React from 'react';
import '../App.css';
import styled from "styled-components";
import NotationHeader from './NotationHeader';
const Container = styled.div`
    background-color: #040D12;
    max-height: 100%;
    min-height: 33%;
    
`;

const NotationBlock = (props) => {
  const {notation} = props;
    
      return (
        <Container>
          <NotationHeader 
            notation={notation}
          />
        </Container>
      );
    }
  
  export default NotationBlock;