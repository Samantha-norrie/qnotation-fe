import React from "react";
import { useState } from "react";
import { NOTATION_DETAILS } from "./Utils";
import styled from "styled-components";
import NotationBlock from "./NotationBlock";

const Notation = styled.div`
  background-color: #040d12;
  max-height: 100%;
  height: 100%;
`;

const BlockContainer = styled.div`
  height: 33%;
}

`;
const NotationsContainer = (props) => {
  const [box, setBox] = useState([
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]);

  return (
    <BlockContainer>
      {NOTATION_DETAILS.map((details, key) =>(
        <Notation>
          <div className={box}></div>
          <NotationBlock
            notationNumber={key}
            {...props}
          ></NotationBlock>
        </Notation>
      ))}
    </BlockContainer>
  );
};

export default NotationsContainer;
