import React from "react";

interface CardProps {
  text: string;
  color?: string;
}

const Card = ({ text, color }: CardProps) => {
  return (
    <div
      style={{
        backgroundColor: color,
        margin: "10px",
        padding: "10px",
        border: "1px solid black",
        width: "fit-content",
      }}
    >
      {text}
    </div>
  );
};

export default Card;
