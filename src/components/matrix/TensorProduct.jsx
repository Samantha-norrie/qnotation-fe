import React from "react";
import Matrix from "./Matrix";
import styled from "styled-components";

const TensorProductContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem;

`;

const TensorProduct = (props) => {
    const {matrices, selected} = props;
    return (
        <TensorProductContainer>
            {
                matrices.map((matrix, index) => (
                    <Matrix
                        matrix={matrix}
                        selected={selected}
                        addTensor={index < matrices.length-1? true: false}
                    />
                ))
            }
        </TensorProductContainer>
    );
}

export default TensorProduct;