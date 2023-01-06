import React from "react";

const Radio = ({ label, labelColor, className, name, ...props }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="radio"
        name={name}
        className={`rounded h-[15.83px] w-[15.83px] bg-[#bdbdbd]`}
        {...props}
      />
      <label
        className="ml-1 text-sm font-normal"
        style={{ color: labelColor ? labelColor : "black" }}
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
