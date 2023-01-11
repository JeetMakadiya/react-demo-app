import React from "react";

const DisplayMedia = ({ className, mediaList, size }) => {
  return (
    <div className={`flex flex-wrap ${className}`}>
      {mediaList &&
        mediaList.map((imageURL) => (
          <img
            src={imageURL}
            alt="imgs"
            className="mr-5 mb-5"
            width={size === "small" ? "79.28px" : "144px"}
            height={size === "small" ? "49px" : "89px"}
          />
        ))}
    </div>
  );
};

export default DisplayMedia;
