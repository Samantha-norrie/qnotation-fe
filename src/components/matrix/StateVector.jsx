import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 10rem;
    padding-right;
    color: white;
    
    &:hover{
      border: 2px solid #FFFFFF;
  }
    
`;

const StateVector = (props) => {
    const {stateVector} = props;
      // const changeIndex = () => {
      //   setCurrentIndex(key);
      //   console.log("new key "+ key);
      // }
      return (
        <Container 
          // className={key === currentIndex? "selected": ""}
          // onClick={() => changeIndex} 
        >
            {
                stateVector.map((row) => 
                    <p>{JSON.stringify(row)}</p>
            )}
        </Container>
      );
    }
  
  export default StateVector;