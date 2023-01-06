import React, { useState } from "react";
import AuthLayout from "../../Components/Layouts/AuthLayout";
import PageHeader from "../../Components/PageHeader";
import VerificationForm from "../../Components/VerificationForm";

const Verification = () => {
  return (
    <AuthLayout>
      <PageHeader
        heading={"Verification"}
        subHeading={"We have sent you OTP on your email address"}
      />
      <VerificationForm className="mt-9" />
    </AuthLayout>
  );
};

export default Verification;
