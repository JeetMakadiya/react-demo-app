import React from "react";

const Checkbox = ({ label, className, labelColor, ...props }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className={`rounded h-[15.83px] w-[15.83px] bg-[#bdbdbd] ${className}`}
        {...props}
      />
      <label
        className="ml-1 text-sm font-normal"
        style={{ color: `${labelColor}` }}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
