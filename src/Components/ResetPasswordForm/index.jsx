import React from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const ResetPasswordForm = ({ className }) => {
  return (
    <form action="" className={`${className}`}>
      <Input
        type="password"
        label="New Password*"
        placeholder="Enter Your Password"
        className="mb-4 mr-[60px]"
      />
      <Input
        type="password"
        label="Confirm Password*"
        placeholder="Enter Your Password"
        className="mb-4"
      />
      <Button type="solid" size="large" className="mb-4">
        Save
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
