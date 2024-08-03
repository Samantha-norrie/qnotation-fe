import React from "react";
import { useState } from "react";
import { NOTATION_DETAILS } from "./Utils";
import styled from "styled-components";
import NotationBlock from "./NotationBlock";

const Notation = styled.li`
  background-color: #040d12;
  max-height: 100%;
  height: 33%;
  min-height: 33%;
`;

const BlockContainer = styled.ul`
  height: 100vh;
  list-style-type: none;
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
