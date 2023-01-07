import React from "react";
import FormWrapper from "../../Components/FormWrapper";
import LoginForm from "../../Components/LoginForm";
import PageHeader from "../../Components/PageHeader";

const Login = () => {
  return (
    <div className="flex xl:flex-row flex-col ">
      <div className="xl:w-[calc(100vw*0.625)] h-[calc(100vh-58px)] w-screen bg-[#2F80ED]"></div>
      <div className="xl:w-[calc(100vw*0.375)] xl:h-[calc(100vh-58px)] w-screen flex justify-center overflow-y-auto">
        <div className="mt-[80px] mb-[80px]">
          <PageHeader
            heading={"Welcome Back!"}
            subHeading={"Login to your account"}
          />
          <FormWrapper>
            <LoginForm className="mt-9" />
          </FormWrapper>
        </div>
      </div>
    </div>
  );
};

export default Login;
