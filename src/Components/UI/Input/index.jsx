import React from "react";

const Input = ({ type, label, placeholder, className, ...props }) => {
  return (
    <div className={`w-[342px] flex flex-col ${className}`}>
      <label className="text-sm font-normal">{label}</label>
      <input
        type={type}
        className={`mt-2 p-4 rounded h-[52px] w-full bg-[#F9F9F9] outline-1 outline-[#FF7F00]`}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
