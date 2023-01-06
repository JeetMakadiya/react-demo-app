import React, { useRef } from "react";

const DatePicker = ({ label, placeholder, className, ...props }) => {
  const dateRef = useRef();
  return (
    <div class={`w-[342px] ${className}`}>
      <label className="text-sm font-normal">{label}</label>
      <input
        ref={dateRef}
        type={"text"}
        className={`mt-2 p-4 rounded h-[52px] w-full bg-[#F9F9F9] outline-1 outline-[#FF7F00]`}
        placeholder={"Select Date"}
        {...props}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
      />
    </div>
  );
};

export default DatePicker;
