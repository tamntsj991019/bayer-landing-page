import React from "react";

const ConvenientShape1 = ({
  text,
  textFill,
  textClassName,
  shapeFill,
  shapeClassName,
}) => {
  return (
    <div className={shapeClassName}>
      <svg
        width="172"
        height="40"
        viewBox="0 0 172 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H172L163 40H0V0Z" fill={shapeFill} />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill={textFill}
          className={textClassName}
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

export default ConvenientShape1;
