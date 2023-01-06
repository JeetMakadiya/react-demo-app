import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-[calc(100vh-58px)]">
        <div className="w-[536px] bg-[#2F80ED]"></div>
        <div className="">
          <div className="mt-[72px] ml-[75px]">{children}</div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
