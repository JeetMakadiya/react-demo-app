import React from "react";
import AuthLayout from "../../Components/Layouts/AuthLayout";
import PageHeader from "../../Components/PageHeader";
import ResetPasswordForm from "../../Components/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <AuthLayout>
      <PageHeader
        heading={"Reset Password"}
        subHeading={"Please enter your new password."}
        className="md:w-[343px] w-screen px-8 md:px-0"
      />
      <div className="md:w-[343px] w-screen px-8 md:px-0">
        <ResetPasswordForm className="mt-9" />
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
