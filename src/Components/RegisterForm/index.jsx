import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Radio from "../UI/Radio";
import RadioGroup from "../UI/RadioGroup";
import DatePicker from "../UI/Datepicker";
import ImageUpload from "../ImageUpload";
import { useFormik } from "formik";
import validationSchema from "../../Utils/validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Store/Auth";
import { showToast } from "../../Utils/showToast";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../Utils/routes";
import { isUserExist } from "../../Utils/auth.utils";
import { convertToBase64 } from "../../Utils/convertToBase64";

const RegisterForm = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((store) => store.auth);
  const {
    getFieldProps,
    handleChange,
    values,
    handleSubmit,
    handleBlur,
    touched,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      image: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      password: "",
      confirmPassword: "",
      dob: null,
      gender: "",
      agreement: "",
    },
    validationSchema: validationSchema.registerFormSchema,
    onSubmit: async (values) => {
      const userExist = await isUserExist(authState.users, values.email);
      if (!userExist) {
        let base64Img = await convertToBase64(values.image);
        await dispatch(register({ ...values, image: base64Img }));
        showToast("success", "User Registered Successfully");
        navigate(AppRoutes.Login);
      } else {
        showToast("error", "Email Already Exist.");
      }
    },
  });
  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      <div className="flex flex-col md:flex-row">
        <ImageUpload
          label={"Upload Image"}
          name={"image"}
          setFieldValue={setFieldValue}
          touched={touched}
          errors={errors}
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
          touched={touched}
          errors={errors}
          className="mb-6 mr-[60px]"
        />
        <Input
          label="Last Name*"
          id={"lastName"}
          name={"lastName"}
          type="text"
          placeholder="Enter Your Last Name"
          {...getFieldProps("lastName")}
          touched={touched}
          errors={errors}
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
          type="number"
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
          {...getFieldProps("confirmPassword")}
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
          // {...getFieldProps("dob")}
          onChange={handleChange}
          touched={touched}
          errors={errors}
          className="mb-4 mr-[60px]"
        />
        <RadioGroup
          label="Gender"
          id="gender"
          name={"gender"}
          {...getFieldProps("gender")}
          value={values.gender}
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
          {...getFieldProps("agreement")}
          value={"agree"}
          checked={values.agreement === "agree"}
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
