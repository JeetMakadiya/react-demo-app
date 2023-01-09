import React from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Radio from "../UI/Radio";
import RadioGroup from "../UI/RadioGroup";
import DatePicker from "../UI/Datepicker";
import ImageUpload from "../ImageUpload";
import { useFormik } from "formik";
import validationSchema from "../../Utils/validationSchema";

const RegisterForm = ({ className }) => {
  const {
    getFieldProps,
    handleChange,
    values,
    handleSubmit,
    handleBlur,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      password: "",
      confirmPassword: "",
      dob: null,
      gender: "",
      agreementShape: "",
    },
    validationSchema: validationSchema.registerFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form action="" className={`${className}`}>
      <div className="flex flex-col md:flex-row">
        <ImageUpload
          label={"Upload Image"}
          className="mb-6 sm:mr-[60px] mr-0"
        />
        <div className="mb-6"></div>
      </div>
      <div className="flex flex-col md:flex-row">
        <Input
          label="First Name*"
          id={"firstName"}
          name={"firstName"}
          type="text"
          placeholder="Enter Your First Name"
          {...getFieldProps("firstName")}
          className="mb-6 mr-[60px]"
        />
        <Input
          label="Last Name*"
          id={"lastName"}
          name={"lastName"}
          type="text"
          placeholder="Enter Your Last Name"
          {...getFieldProps("lastName")}
          className="mb-6"
        />
      </div>
      <div className="flex flex-col md:flex-row ">
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Enter Your Email"
          {...getFieldProps("email")}
          touched={touched}
          errors={errors}
          className="mb-6 mr-[60px]"
        />
        <Input
          label="Phone*"
          id={"phoneNo"}
          name={"phoneNo"}
          type="text"
          placeholder="Enter Your Phone Number"
          {...getFieldProps("phoneNo")}
          touched={touched}
          errors={errors}
          className="mb-6"
        />
      </div>
      <div className="flex flex-col md:flex-row">
        <Input
          label="Password*"
          id={"password"}
          name={"password"}
          type="password"
          placeholder="Enter Your Password"
          {...getFieldProps("password")}
          touched={touched}
          errors={errors}
          className="mb-4 mr-[60px]"
        />
        <Input
          label="Confirm Password*"
          id={"confirmPassword"}
          name={"confirmPassword"}
          type="password"
          placeholder="Enter Your Password"
          {...getFieldProps("")}
          touched={touched}
          errors={errors}
          className="mb-4"
        />
      </div>
      <div className="flex flex-col md:flex-row">
        <DatePicker
          label="Date of Birth"
          id="dob"
          name="dob"
          placeholder="Select date"
          {...getFieldProps("")}
          touched={touched}
          errors={errors}
          className="mb-4 mr-[60px]"
        />
        <RadioGroup
          label="Gender"
          id="gender"
          name={"gender"}
          {...getFieldProps("")}
          touched={touched}
          errors={errors}
          className="mb-4"
        />
      </div>
      <div className="flex flex-col md:flex-row">
        <Radio
          label="I agree to the tearms of services"
          id="agreement"
          name="agreement"
          labelColor="#9494AE"
          {...getFieldProps("")}
          touched={touched}
          errors={errors}
          className="w-full mb-4 mr-[60px]"
        />
        <div className="w-full"></div>
      </div>
      <div className="flex flex-col md:flex-row">
        <Button
          htmlType={"submit"}
          type="solid"
          className="mb-4 mr-[60px]"
          block
        >
          Get Started
        </Button>
        <div className="w-full"></div>
      </div>
    </form>
  );
};

export default RegisterForm;
