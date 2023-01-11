import React, { useEffect, useRef, useState } from "react";

const ImageUpload = ({
  className,
  label,
  name,
  value,
  touched,
  errors,
  setFieldValue,
  onBlur,
  ...props
}) => {
  const fileInput = useRef();
  const [file, setFile] = useState(value);
  const handleChange = (e) => {
    setFieldValue(name, e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const handleUpload = () => {
    fileInput.current.click();
  };
  return (
    <div className={`${className}`}>
      <input
        type="file"
        id="fileInput"
        name={name}
        ref={fileInput}
        onChange={handleChange}
        hidden
      />
      <div className="flex items-center">
        <img
          src={file}
          className="w-[102px] h-[102px] mr-9 bg-[#979797] border-2 border-[#979797] rounded-full"
        />
        <button
          className="bg-[#F9F9F9] border-2 border-[#333333] w-[125px] h-[32px] rounded cursor-pointer flex items-center justify-center"
          onClick={handleUpload}
          type="button"
        >
          {label}
        </button>
      </div>
      {touched && errors && touched[name] && errors[name] && (
        <div className="mt-1 text-sm text-red-500">{errors[name]}</div>
      )}
    </div>
  );
};

export default ImageUpload;
