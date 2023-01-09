import React from "react";
import ChangePasswordForm from "../../Components/ChangePasswordForm";
import PageHeader from "../../Components/PageHeader";

const ChangePassword = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <PageHeader
        heading={"Change Password"}
        subHeading={"Please enter your new password."}
      />
      <div className="md:w-[547px] w-full md:px-0 px-10">
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default ChangePassword;
