import React from "react";

const Radio = ({
  label,
  labelColor,
  className,
  value,
  name,
  checked,
  touched,
  errors,
  ...props
}) => {
  return (
    <div className={` ${className}`}>
      <div className="flex items-center">
        <input
          type="radio"
          name={name}
          className={`rounded h-[15.83px] w-[15.83px] bg-[#bdbdbd]`}
          {...props}
          value={value}
          checked={checked}
        />
        <label
          className="ml-1 text-sm font-normal"
          style={{ color: labelColor ? labelColor : "black" }}
        >
          {label}
        </label>
      </div>
      {touched && errors && touched[name] && errors[name] ? (
        <div className="mt-1 text-sm text-red-500">{errors[name]}</div>
      ) : null}
    </div>
  );
};

export default Radio;
