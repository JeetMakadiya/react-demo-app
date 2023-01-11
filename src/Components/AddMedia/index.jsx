import React, { useEffect, useRef, useState } from "react";
import DisplayMedia from "../DisplayMedia";
import Button from "../UI/Button";

const AddMedia = ({
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
  const mediaInputRef = useRef();
  const [files, setFiles] = useState([]);
  const handleChange = (e) => {
    setFiles([...files, URL.createObjectURL(e.target.files[0])]);
    setFieldValue(name, [...files, URL.createObjectURL(e.target.files[0])]);
  };
  const handleUpload = () => {
    mediaInputRef.current.click();
  };
  return (
    <div className={`${className}`}>
      <input
        type="file"
        id="mediaInputRef"
        name={name}
        ref={mediaInputRef}
        onChange={handleChange}
        multiple
        hidden
      />
      <Button
        htmlType={"button"}
        type={"solid"}
        onClick={handleUpload}
        className=""
      >
        Add Media
      </Button>
      <DisplayMedia className="mt-[35px]" size={"large"} mediaList={files} />
      {/* {touched && errors && touched[name] && errors[name] && (
        <div className="mt-1 text-sm text-red-500">{errors[name]}</div>
      )} */}
    </div>
  );
};

export default AddMedia;
