import React from "react";
import ChangePasswordForm from "../../Components/ChangePasswordForm";
import PageHeader from "../../Components/PageHeader";
import ProtectedRoutes from "../../Components/ProtectedRoutes";

const ChangePassword = () => {
  return (
    <ProtectedRoutes>
      <div className="flex flex-col items-center justify-start mt-16">
        <div>
          <PageHeader
            heading={"Change Password"}
            subHeading={"Please enter your new password."}
            className={"mb-5"}
          />
          <div className="md:w-[547px] w-full md:px-0 px-10">
            <ChangePasswordForm />
          </div>
        </div>
      </div>
    </ProtectedRoutes>
  );
};

export default ChangePassword;
