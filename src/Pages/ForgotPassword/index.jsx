import React from "react";
import ForgotPasswordForm from "../../Components/ForgotPasswordForm";
import AuthLayout from "../../Components/Layouts/AuthLayout";
import PageHeader from "../../Components/PageHeader";
import PublicRoutes from "../../Components/PublicRoutes";

const ForgotPassword = () => {
  const subHeading = (
    <span>
      Please enter your registered email address <br /> we'll send you reset
      instruction
    </span>
  );
  return (
    <PublicRoutes>
      <AuthLayout>
        <PageHeader
          heading={"Forgot password?"}
          subHeading={subHeading}
          className=" w-screen px-8 md:px-0"
        />
        <div className="md:w-[343px] w-screen px-8 md:px-0">
          <ForgotPasswordForm className="mt-9" />
        </div>
      </AuthLayout>
    </PublicRoutes>
  );
};

export default ForgotPassword;
