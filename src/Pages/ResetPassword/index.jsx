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
      />
      <ResetPasswordForm className="mt-9" />
    </AuthLayout>
  );
};

export default ResetPassword;
