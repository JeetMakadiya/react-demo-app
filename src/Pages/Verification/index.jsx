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
        className="md:w-[343px] w-screen px-8 md:px-0"
      />
      <div className="md:w-[343px] w-screen px-8 md:px-0">
        <VerificationForm className="mt-9" />
      </div>
    </AuthLayout>
  );
};

export default Verification;
