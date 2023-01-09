import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

const ChangePasswordForm = ({ className }) => {
  return (
    <form action="" className={`${className}`}>
      <Input
        type="password"
        label="Old Password*"
        placeholder="Enter Your Old Password"
        className="mb-4 mr-[60px]"
      />
      <Input
        type="password"
        label="New Password*"
        placeholder="Enter Your New Password"
        className="mb-4 mr-[60px]"
      />
      <Input
        type="password"
        label="Confirm Password*"
        placeholder="Enter Your New Password"
        className="mb-4"
      />
      <Button type="solid" className="mb-4" block>
        Save
      </Button>
    </form>
  );
};

export default ChangePasswordForm;
