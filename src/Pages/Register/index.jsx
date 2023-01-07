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
        className="md:w-[656px] w-screen px-8 md:px-0"
      />
      <div className=" md:w-[656px] w-screen px-8 md:px-0">
        <RegisterForm className="mt-9" />
      </div>
    </AuthLayout>
  );
};

export default Register;
