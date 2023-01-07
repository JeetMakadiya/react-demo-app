import React from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const ForgotPasswordForm = ({ className }) => {
  return (
    <form action="" className={`${className}`}>
      <Input
        type="email"
        label="Email*"
        placeholder="Enter Your Email"
        className="mb-6"
      />
      <Button type="solid" className="mb-4" block>
        Send
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
