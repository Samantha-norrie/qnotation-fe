import React from "react";
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

const Matrix = (props) => {
  const { matrix, key, currentIndex, setCurrentIndex } = props;
  // const changeIndex = () => {
  //   setCurrentIndex(key);
  //   console.log("new key "+ key);
  // }
  return (
    <Container
      className={key === currentIndex ? "selected" : ""}
      // onClick={() => changeIndex}
    >
      {matrix.map((row) => (
        <p>{JSON.stringify(row)}</p>
      ))}
    </Container>
  );
};

export default Matrix;
