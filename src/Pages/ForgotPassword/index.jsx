import React from "react";
import ForgotPasswordForm from "../../Components/ForgotPasswordForm";
import AuthLayout from "../../Components/Layouts/AuthLayout";
import PageHeader from "../../Components/PageHeader";

const ForgotPassword = () => {
  const subHeading = (
    <span>
      Please enter your registered email address <br /> we'll send you reset
      instruction
    </span>
  );
  return (
    <AuthLayout>
      <PageHeader heading={"Forgot password?"} subHeading={subHeading} />
      <ForgotPasswordForm className="mt-9" />
    </AuthLayout>
  );
};

export default ForgotPassword;
