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
      <div className="flex justify-center mt-[30px] text-[#FF7F00] text-sm font-normal">
        RESEND
      </div>
      <Button type="solid" className="mb-4 mt-[53px]" block>
        Send
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
