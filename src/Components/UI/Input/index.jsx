import React from "react";

const Input = ({
  id,
  name,
  type,
  label,
  placeholder,
  className,
  onChange,
  value,
  touched,
  errors,
  disabled = false,
  ...props
}) => {
  return (
    <div className={`w-full flex flex-col ${className}`}>
      <label className="text-sm font-normal">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        className={`mt-2 p-4 rounded h-[52px] w-full bg-[#F9F9F9] outline-1 outline-[#FF7F00] text-sm`}
        placeholder={placeholder}
        {...props}
        disabled={disabled}
      />
      {touched && errors && touched[name] && errors[name] ? (
        <div className="mt-1 text-sm text-red-500">{errors[name]}</div>
      ) : null}
    </div>
  );
};

export default Input;
