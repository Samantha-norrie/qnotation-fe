import React from 'react';
import styled from "styled-components";
import { GATE, QUBIT } from '../Utils';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 10rem;
    padding-right;
    &:hover{
      border: 2px solid #FFFFFF;
  }
    
`;
const P = styled.p`
    color: white;
    display: inline;
`;

const DiracGate = (props) => {
    const {content, type, key, currentIndex} = props;

    return (
        <Container>
          {type === QUBIT &&
            <div>
            {content.map((colInstance) =>
                <P>{colInstance}</P>
            )}
            </div>
          }
          {type === GATE && 
            <div>
              {content.map((colInstance) =>
                <P>{colInstance.gate}</P>
              )}
            </div>
          }


        </Container>
      );
    }
  
  export default DiracGate;