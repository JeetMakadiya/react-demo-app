import React, { useRef } from "react";

const DatePicker = ({
  id,
  name,
  label,
  placeholder,
  className,
  onChange,
  touched,
  errors,
  value,
  ...props
}) => {
  const dateRef = useRef();
  return (
    <div class={`w-full ${className}`}>
      <label className="text-sm font-normal">{label}</label>
      <input
        id={id}
        name={name}
        type={"text"}
        ref={dateRef}
        className={`mt-2 p-4 rounded h-[52px] w-full bg-[#F9F9F9] outline-1 outline-[#FF7F00]`}
        placeholder={"Select Date"}
        {...props}
        value={value}
        onChange={onChange}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
      />
      {touched && errors && touched[name] && errors[name] ? (
        <div className="mt-1 text-sm text-red-500">{errors[name]}</div>
      ) : null}
    </div>
  );
};

export default DatePicker;
