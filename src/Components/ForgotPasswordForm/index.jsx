import React from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Radio from "../UI/Radio";
import RadioGroup from "../UI/RadioGroup";
import DatePicker from "../UI/Datepicker";

const ForgotPasswordForm = ({ className }) => {
  return (
    <form action="" className={`${className}`}>
      <div className="flex">
        <Input
          type="email"
          label="Email*"
          placeholder="Enter Your Email"
          className="mb-6 mr-[60px]"
        />
      </div>
      <Button type="solid" size="large" className="mb-4">
        Send
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
