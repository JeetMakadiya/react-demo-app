import React from "react";

const Textarea = ({
  type,
  label,
  labelColor,
  placeholder,
  name,
  className,
  ...props
}) => {
  return (
    <div className={`${className}`}>
      <label
        className="text-sm font-normal"
        style={{ color: labelColor ? labelColor : "black" }}
      >
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        className="mt-2 h-[302px] w-[809px] border border-[#979797] rounded outline-[#FF7F00] p-4"
      ></textarea>
    </div>
  );
};

export default Textarea;
