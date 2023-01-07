import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="flex xl:flex-row flex-col min-h-[calc(100vh-58px)]">
        <div className="xl:w-[calc(100vw*0.38)] h-[calc(100vh-58px)] w-screen bg-[#2F80ED]"></div>
        <div className="xl:w-[calc(100vw*0.62)] xl:h-[calc(100vh-58px)] w-screen overflow-y-auto flex justify-center xl:justify-start">
          <div className="mt-[72px] xl:ml-[75px]">{children}</div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
