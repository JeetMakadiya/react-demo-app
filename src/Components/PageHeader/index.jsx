import React from "react";

const PageHeader = ({ heading, subHeading }) => {
  return (
    <div>
      <h1 className="font-semibold text-[32px]">{heading}</h1>
      <p className="font-normal text-[20px] text-[#8F9BB3]">{subHeading}</p>
    </div>
  );
};

export default PageHeader;
