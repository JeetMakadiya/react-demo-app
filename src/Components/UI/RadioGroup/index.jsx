import React from "react";
import Radio from "../Radio";

const RadioGroup = ({ label, className, name, ...props }) => {
  return (
    <div className={`w-[342px] flex flex-col ${className}`}>
      <label className="text-sm font-normal">{label}</label>
      <div className="mt-2 flex">
        <Radio label="Male" name="gender" value="Male" className="mr-[43px]" />
        <Radio label="Female" name="gender" value="Female" />
      </div>
    </div>
  );
};

export default RadioGroup;
