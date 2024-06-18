import React from 'react';
import styled from "styled-components";
import Gate from './Gate';
import Qubit from './Qubit';
import { GATE, QUBIT } from '../Utils';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { updateCurrentIndex } from '../../slices/CurrentIndexSlice';

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
    const dispatch = useDispatch();
    var id = useSelector((state) => state.currentIndex.value)
    useEffect(() => {
      console.log("index"+ id);
    }, []);
      return (
        <Container onClick={() => dispatch(updateCurrentIndex(key))}>
          {type === QUBIT &&
            <div>
            {content.map((colInstance) =>
              <Qubit qubit={colInstance} key={key}/>
            )}
            </div>
          }
          {type == GATE && 
            <div>
              {content.map((colInstance) =>
                <Gate gate={colInstance.gate} key={key}/>
              )}
            </div>
          }


        </Container>
      );
    }
  
  export default Column;