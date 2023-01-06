import React from "react";

const Button = ({ children, type, className, size, ...props }) => {
  const solid = "bg-[#FF7F00] text-white";
  const whiteOutlined = "bg-transparent text-white border-2 border-white";
  const orangeOutlined =
    "bg-transparent text-[#FF7F00] border-2 border-[#FF7F00]";
  const btnStyle = `text-base rounded-[4px] ${
    type === "solid"
      ? solid
      : type === "outlined-white"
      ? whiteOutlined
      : orangeOutlined
  }  ${size === "large" ? "w-[343px] h-[52px]" : "w-[118px] h-[42px]"} `;
  return (
    <button className={btnStyle + ` ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
