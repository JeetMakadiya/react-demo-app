import React from "react";
import AuthLayout from "../../Components/Layouts/AuthLayout";
import PageHeader from "../../Components/PageHeader";
import PublicRoutes from "../../Components/PublicRoutes";
import RegisterForm from "../../Components/RegisterForm";

const Register = () => {
  return (
    <PublicRoutes>
      <AuthLayout>
        <PageHeader
          heading={"Create your account"}
          subHeading={"We need some details to setup your account"}
          className="px-8 md:px-0"
        />
        <div className="flex-[2_2_0%] px-8 md:px-0">
          <RegisterForm className="mt-9" />
        </div>
      </AuthLayout>
    </PublicRoutes>
  );
};

export default Register;
