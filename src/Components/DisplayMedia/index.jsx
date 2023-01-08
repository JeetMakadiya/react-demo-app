import React from "react";
import media from "../../Images/media.png";

const DisplayMedia = ({ className, mediaList, size }) => {
  return (
    <div className={`flex flex-wrap ${className}`}>
      <img
        src={media}
        alt="imgs"
        srcset=""
        className="mr-5"
        width={size === "small" ? "79.28px" : "144px"}
        height={size === "small" ? "49px" : "89px"}
      />
      <img
        src={media}
        alt="imgs"
        srcset=""
        className="mr-5"
        width={size === "small" ? "79.28px" : "144px"}
        height={size === "small" ? "49px" : "89px"}
      />
      <img
        src={media}
        alt="imgs"
        srcset=""
        className="mr-5"
        width={size === "small" ? "79.28px" : "144px"}
        height={size === "small" ? "49px" : "89px"}
      />
      <img
        src={media}
        alt="imgs"
        srcset=""
        className="mr-5"
        width={size === "small" ? "79.28px" : "144px"}
        height={size === "small" ? "49px" : "89px"}
      />
    </div>
  );
};

export default DisplayMedia;
