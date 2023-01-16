import React, { useRef, useState } from "react";
import Remove from "../../Icons/Remove";
import { convertToBase64 } from "../../Utils/convertToBase64";
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
  const handleChange = async (e) => {
    const base64MediaList = [...files];
    for (let file in e.target.files) {
      if (e.target.files[file] instanceof File) {
        let base64File = await convertToBase64(e.target.files[file]);
        base64MediaList.push(base64File);
      }
    }
    setFiles(base64MediaList);
    setFieldValue(name, base64MediaList);
  };
  const handleUpload = () => {
    mediaInputRef.current.click();
  };
  const handleRemoveMedia = (index) => {
    const updatedMedia = [...files.slice(0, index), ...files.slice(index + 1)];
    setFiles(updatedMedia);
    setFieldValue(name, updatedMedia);
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
      <div className={`flex flex-wrap mt-[35px]`}>
        {files &&
          files.map((imageURL, index) => (
            <div className={`relative mr-5 mb-5 w-[144px] h-[89px]`}>
              <img
                src={imageURL}
                alt="imgs"
                className="w-full h-full object-cover"
              />
              <Remove
                size={"20px"}
                className="absolute top-0 right-0 cursor-pointer bg-white"
                onClick={() => handleRemoveMedia(index)}
              />
            </div>
          ))}
      </div>
      {/* {touched && errors && touched[name] && errors[name] && (
        <div className="mt-1 text-sm text-red-500">{errors[name]}</div>
      )} */}
    </div>
  );
};

export default AddMedia;
