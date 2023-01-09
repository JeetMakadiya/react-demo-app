import React, { useRef, useState } from "react";
import FemaleImg from "../../Images/female.png";

const ImageUpload = ({ className, label }) => {
  const fileInput = useRef();
  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={file}
        srcset=""
        className="w-[102px] h-[102px] mr-9 bg-[#979797] border-2 border-[#979797] rounded-full"
      />
      <label
        for="fileInput"
        className="bg-[#F9F9F9] border-2 border-[#333333] w-[125px] h-[32px] rounded cursor-pointer flex items-center justify-center"
        onClick={() => fileInput.current.click()}
      >
        {label}
      </label>
      <input
        type="file"
        id="fileInput"
        ref={fileInput}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};

export default ImageUpload;
