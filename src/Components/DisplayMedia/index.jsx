import React from "react";

const DisplayMedia = ({ className, mediaList, size }) => {
  return (
    <div className={`flex flex-wrap ${className}`}>
      {mediaList &&
        mediaList.map((imageURL) => (
          <div
            className={`mr-5 mb-5 ${
              size === "small" ? "w-[79.28px]" : "w-[144px]"
            } ${size === "small" ? "h-[49px]" : "h-[89px]"} `}
          >
            <img
              src={imageURL}
              alt="imgs"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
    </div>
  );
};

export default DisplayMedia;
