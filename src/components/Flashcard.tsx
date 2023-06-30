import React from "react";

interface GridBoxSide {
  side: number;
}

const Flashcard = ({ side } : GridBoxSide) => {
  return (
    <div
      style={{
        height: side,
        width: side,
        border: '1px solid black'
      }}
    >{`I am a box of side ${side}`}</div>
  );
};

export default Flashcard;
