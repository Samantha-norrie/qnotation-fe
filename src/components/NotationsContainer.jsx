import React from 'react';
import '../App.css';
import { useState, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styled from "styled-components";
import NotationBlock from './NotationBlock';


const Notation = styled.li`
    background-color:#040D12;
    max-height: 100%;
    height: 33%;
    min-height: 33%;
`;

const BlockContainer = styled.ul`
    height: 100vh;
`;
const NotationsContainer = (props) => {

    const {currentIndex, setCurrentIndex, circuitEquation, matrixEquation} = props;
    useEffect(() => {
      console.log("matrix in container"+ matrixEquation.length);
    }, [matrixEquation]);
    const [box, setBox] = useState(
        [
          {
            id: 0
          },
          {
            id: 1
          },
          {
            id: 2
          }
        ]);
      function handleOnDragEnd(result) {
        if(!result.destination) return;
        const newBox = Array.from(box);
        const [draggedItem] = newBox.splice(result.source.index, 1);
        newBox.splice(result.destination.index, 0, draggedItem);
        setBox(newBox);
      }
    
      return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="boxes">
            {(provided) => (
              <BlockContainer ref={provided.innerRef} {...provided.droppableProps}>
                {box.map(({id}, index) => 
                  <Draggable key={id} draggableId={id.toString()} index={index}>
                    {(provided) => (
                      <Notation  ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                        <div className={box}></div>
                        <NotationBlock notationNumber={id} circuitEquation={circuitEquation} matrixEquation={matrixEquation}></NotationBlock>
                      </Notation>
                    )}
                  </Draggable>
                )}
                {provided.placeholder}
              </BlockContainer>
            )}
          </Droppable>
        </DragDropContext>
      );
    }
  
  export default NotationsContainer;