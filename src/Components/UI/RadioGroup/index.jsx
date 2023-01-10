import React from "react";
import Radio from "../Radio";

const RadioGroup = ({
  label,
  id,
  className,
  name,
  touched,
  errors,
  value,
  ...props
}) => {
  return (
    <div className={`w-full flex flex-col ${className}`}>
      <label className="text-sm font-normal">{label}</label>
      <div className="mt-6 flex">
        <Radio
          label="Male"
          name={name}
          {...props}
          value="Male"
          checked={value === "Male"}
          className="mr-[43px]"
        />
        <Radio
          label="Female"
          name={name}
          {...props}
          value="Female"
          checked={value === "Female"}
        />
      </div>
      {touched && errors && touched[name] && errors[name] ? (
        <div className="mt-1 text-sm text-red-500">{errors[name]}</div>
      ) : null}
    </div>
  );
};

export default RadioGroup;
