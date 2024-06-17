import React from 'react';
import styled from "styled-components";
import Gate from './Gate';
import Qubit from './Qubit';
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
`;

const Column = (props) => {
    const {content, type, key} = props;
      return (
        <Container>
          {/* <P>{JSON.stringify(content)}</P> */}
          {type === QUBIT &&
            <div>
            {content.map((colInstance) =>
              <Qubit qubit={colInstance.qubit}/>
            )}
            </div>
          }
          {type == GATE && 
            <div>
              {content.map((colInstance) =>
                <Gate gate={colInstance.gate}/>
              )}
            </div>
          }


        </Container>
      );
    }
  
  export default Column;