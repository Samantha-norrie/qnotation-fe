import React from "react";

import styled from "styled-components";

const Container = styled.div`
  min-height: 20px;
  max-height: 40px;
  background-color: #9290c3;
  color: #1b1a55;
  border-radius: 1em;
`;

const Value = styled.p`
  padding: 0.25em;
`;

const Qubit = (props) => {
  const { qubit, key, currentIndex } = props;
  return (
    <Container className={key === currentIndex ? "selected" : ""}>
      <Value>|{qubit}</Value>
    </Container>
  );
};

export default Qubit;
