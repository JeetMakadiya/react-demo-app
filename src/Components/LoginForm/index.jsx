import React from "react";
import Input from "../UI/Input";
import Checkbox from "../UI/Checkbox";
import Button from "../UI/Button";

const LoginForm = ({ className }) => {
  return (
    <form action="" className={`${className}`}>
      <Input
        type="email"
        label="Email"
        placeholder="Enter Your Email"
        className="mb-6"
      />
      <Input
        type="password"
        label="Password"
        placeholder="Enter Your Password"
        className="mb-4"
      />
      <div className="flex justify-between mb-[42px]">
        <Checkbox label="Remember Me" labelColor={"#FF7F00"} />
        <a className="text-[#FF7F00] text-sm font-normal cursor-pointer hover:underline">
          Forgot Password?
        </a>
      </div>
      <Button type="solid" size="large">
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
