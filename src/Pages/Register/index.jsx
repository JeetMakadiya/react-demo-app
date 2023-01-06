import React from "react";
import AuthLayout from "../../Components/Layouts/AuthLayout";
import PageHeader from "../../Components/PageHeader";
import RegisterForm from "../../Components/RegisterForm";

const Register = () => {
  return (
    <AuthLayout>
      <PageHeader
        heading={"Create your account"}
        subHeading={"We need some details to setup your account"}
      />
      <RegisterForm className="mt-9" />
    </AuthLayout>
  );
};

export default Register;
