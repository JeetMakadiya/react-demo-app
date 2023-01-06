import React from "react";
import LoginForm from "../../Components/LoginForm";
import PageHeader from "../../Components/PageHeader";

const Login = () => {
  return (
    <div className="flex min-h-[calc(100vh-58px)]">
      <div className="w-[900px] bg-[#2F80ED]"></div>
      <div className="w-[540px] mt-[80px] flex justify-center">
        <div className="">
          <PageHeader
            heading={"Welcome Back!"}
            subHeading={"Login to yout account"}
          />
          <LoginForm className="mt-9" />
        </div>
      </div>
    </div>
  );
};

export default Login;
