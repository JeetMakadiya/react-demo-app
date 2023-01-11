import React from "react";

const Textarea = ({
  type,
  id,
  label,
  labelColor,
  placeholder,
  name,
  className,
  ...props
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label
        className="text-sm font-normal"
        style={{ color: labelColor ? labelColor : "black" }}
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className="mt-2 h-[302px] w-full border border-[#979797] rounded outline-[#FF7F00] p-4"
        {...props}
      ></textarea>
    </div>
  );
};

export default Textarea;
