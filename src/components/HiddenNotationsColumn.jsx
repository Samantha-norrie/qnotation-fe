import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

const Container = styled.div`
  background-color: #040d12;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const HiddenNotationsColumn = (props) => {
  const {displayTensorProduct, setDisplayTensorProduct, disableDisplayTensorProduct} = props;
  return (
    <Container>
        <Button
          disabled={disableDisplayTensorProduct}
          variant={displayTensorProduct ? "outlined" : "contained"}
          onClick={() => setDisplayTensorProduct(!displayTensorProduct)}
        >
          Tensor
        </Button>
        <Button>?</Button>
    </Container>
  );
};

export default HiddenNotationsColumn;
