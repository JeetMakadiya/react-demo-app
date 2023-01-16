import React from "react";
import LoginForm from "../../Components/LoginForm";
import LoginSlider from "../../Components/LoginSlider";
import PageHeader from "../../Components/PageHeader";
import PublicRoutes from "../../Components/PublicRoutes";

const Login = () => {
  return (
    <PublicRoutes>
      <div className="flex flex-row">
        <LoginSlider />
        <div className="flex-[3_3_0%] xl:h-[calc(100vh-58px)] min-h-[calc(100vh-58px)]  flex justify-center overflow-y-auto bg-white">
          <div className="mt-[80px] mb-[80px]">
            <PageHeader
              heading={"Welcome Back!"}
              subHeading={"Login to your account"}
            />
            <div className="sm:w-[343px] w-[260px]">
              <LoginForm className="mt-9" />
            </div>
          </div>
        </div>
      </div>
    </PublicRoutes>
  );
};

export default Login;
