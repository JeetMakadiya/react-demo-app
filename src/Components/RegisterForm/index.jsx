import React from "react";
import Input from "../UI/Input";
import Checkbox from "../UI/Checkbox";
import Button from "../UI/Button";
import Radio from "../UI/Radio";
import RadioGroup from "../UI/RadioGroup";
import DatePicker from "../UI/Datepicker";

const RegisterForm = ({ className }) => {
  return (
    <form action="" className={`${className}`}>
      <div className="flex">
        <Input
          type="text"
          label="First Name*"
          placeholder="Enter Your First Name"
          className="mb-6 mr-[60px]"
        />
        <Input
          type="text"
          label="Last Name*"
          placeholder="Enter Your Last Name"
          className="mb-6"
        />
      </div>
      <div className="flex">
        <Input
          type="email"
          label="Email*"
          placeholder="Enter Your Email"
          className="mb-6 mr-[60px]"
        />
        <Input
          type="text"
          label="Phone*"
          placeholder="Enter Your Phone Number"
          className="mb-6"
        />
      </div>
      <div className="flex">
        <Input
          type="password"
          label="Password*"
          placeholder="Enter Your Password"
          className="mb-4 mr-[60px]"
        />
        <Input
          type="password"
          label="Confirm Password*"
          placeholder="Enter Your Password"
          className="mb-4"
        />
      </div>
      <div className="flex">
        <DatePicker
          label="Date of Birth"
          placeholder="Select date"
          className="mb-4 mr-[60px]"
        />
        <RadioGroup label="Gender" className="mb-4" />
      </div>
      <Radio
        label="I agree to the tearms of services"
        labelColor="#9494AE"
        name="agreement"
        className="mb-4"
      />
      <Button type="solid" size="large" className="mb-4">
        Get Started
      </Button>
    </form>
  );
};

export default RegisterForm;
