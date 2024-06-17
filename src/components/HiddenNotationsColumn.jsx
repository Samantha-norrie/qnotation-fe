import React from 'react';
import '../App.css';
import styled from "styled-components";
import { Button } from '@mui/material';
const Container = styled.div`
    background-color: #040D12;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: end;
`;

const HiddenNotationsColumn = () => {
    
      return (
        <Container>
          <Button>?</Button>
        </Container>
      );
    }
  
  export default HiddenNotationsColumn;