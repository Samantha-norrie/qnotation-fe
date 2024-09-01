import React from "react";
import Matrix from "./Matrix";
import styled from "styled-components";
import StateVector from "./StateVector";
import { useEffect } from "react";
import { TabContainer, EquationContainer, StateContainer, SELECTED_DIRAC_MATRIX, ScrollContainer } from "../Utils";

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