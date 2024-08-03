import React from "react";
import Matrix from "./Matrix";
import styled from "styled-components";
import StateVector from "./StateVector";
import { useEffect } from "react";
import { TabContainer, EquationContainer, StateContainer, SELECTED_DIRAC_MATRIX, ScrollContainer } from "../Utils";

const TensorProductContainer = styled.div`
    display: flex;
    align-items: center;

`;

const TensorProduct = (props) => {
    const {matrices, selected} = props;
    return (
        <TensorProductContainer>
            {
                matrices.map((matrix) => (
                    <Matrix
                        matrix={matrix}
                        selected={selected}
                    />
                ))
            }
        </TensorProductContainer>
    );
}

export default TensorProduct;