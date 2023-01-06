import React from "react";

const More = ({ size, color, className }) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 4 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2" cy="2" r="2" fill={color} />
      <circle cx="2" cy="9" r="2" fill={color} />
      <circle cx="2" cy="16" r="2" fill={color} />
    </svg>
  );
};

export default More;
