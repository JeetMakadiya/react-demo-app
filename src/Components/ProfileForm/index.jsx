import React from "react";
import ImageUpload from "../ImageUpload";
import Button from "../UI/Button";
import DatePicker from "../UI/Datepicker";
import Input from "../UI/Input";
import RadioGroup from "../UI/RadioGroup";

const ProfileForm = ({ className }) => {
  return (
    <form action="" className={`${className}`}>
      <div className="flex flex-col md:flex-row">
        <ImageUpload
          label={"Upload Image"}
          className="mb-6 sm:mr-[60px] mr-0"
        />
        <div className="mb-6"></div>
      </div>
      <div className="flex flex-col xl:flex-row">
        <Input
          type="text"
          label="First Name*"
          placeholder="Enter Your First Name"
          className="mb-6 xl:mr-[60px]"
        />
        <Input
          type="text"
          label="Last Name*"
          placeholder="Enter Your Last Name"
          className="mb-6"
        />
      </div>
      <div className="flex flex-col xl:flex-row ">
        <Input
          type="email"
          label="Email*"
          placeholder="Enter Your Email"
          className="mb-6 xl:mr-[60px]"
        />
        <Input
          type="text"
          label="Phone*"
          placeholder="Enter Your Phone Number"
          className="mb-6"
        />
      </div>
      <div className="flex flex-col xl:flex-row">
        <DatePicker
          label="Date of Birth"
          placeholder="Select date"
          className="mb-4 xl:mr-[60px]"
        />
        <RadioGroup label="Gender" className="mb-4" />
      </div>
      <div className="flex flex-col xl:flex-row">
        <Button type="solid" className="mb-4 xl:mr-[60px]" block>
          Save
        </Button>
        <div className="w-full"></div>
      </div>
    </form>
  );
};

export default ProfileForm;
