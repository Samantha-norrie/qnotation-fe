import React from 'react';
import '../App.css';
import styled from "styled-components";
import Editor from "@monaco-editor/react";
const Container = styled.div`
    background-color: #040D12;
    height: 100vh;
    
`;

const CodeContainer = () => {
    
      return (
        <Container>
            <Editor
                height="100vh"
                language="javascript"
                theme="vs-dark"
                value=""
            />
        </Container>
      );
    }
  
  export default CodeContainer;