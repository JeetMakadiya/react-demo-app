import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../Utils/showToast";
import validationSchema from "../../Utils/validationSchema";
import ImageUpload from "../ImageUpload";
import Button from "../UI/Button";
import DatePicker from "../UI/Datepicker";
import Input from "../UI/Input";
import RadioGroup from "../UI/RadioGroup";
import * as Yup from "yup";
import { updateDetails } from "../../Store/Auth";
import { convertToBase64 } from "../../Utils/convertToBase64";

const FILE_SIZE = 20 * 1024 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const ProfileForm = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((store) => store.auth);
  const loggedInUserDetails = authState.loggedInUserDetails;
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
      image: loggedInUserDetails.image,
      firstName: loggedInUserDetails.firstName,
      lastName: loggedInUserDetails.lastName,
      email: loggedInUserDetails.email,
      phoneNo: loggedInUserDetails.phoneNo,
      dob: loggedInUserDetails.dob,
      gender: loggedInUserDetails.gender,
    },
    validationSchema: Yup.object({
      image: Yup.mixed()
        .nullable()
        .required("*Please upload your image.")
        .test(
          "FILE_FORMAT",
          "Uploaded file has unsupported format.",
          (value) => {
            if (loggedInUserDetails && loggedInUserDetails.image) {
              return true;
            }
            return !value || (value && SUPPORTED_FORMATS.includes(value.type));
          }
        )
        .test("FILE_SIZE", "Uploaded file is too big.", (value) => {
          if (loggedInUserDetails && loggedInUserDetails.image) {
            return true;
          }
          return !value || (value && value.size <= FILE_SIZE);
        }),
      firstName: Yup.string().required("*First Name is required."),
      lastName: Yup.string().required("*Last Name is required."),
      email: Yup.string()
        .email("*Invalid email address")
        .required("*Email address is required."),
      phoneNo: Yup.number().required("*Phone no is required."),
      dob: Yup.string().nullable().required("*Please Select Date Of Birth."),
      gender: Yup.string().required("*Gender is required."),
    }),
    onSubmit: async (values) => {
      let base64Img = await convertToBase64(values.image);
      dispatch(updateDetails({ ...values, image: base64Img }));
      showToast("success", "User Details Updated.");
    },
  });
  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      <div className="flex flex-col md:flex-row">
        <ImageUpload
          label={"Upload Image"}
          name={"image"}
          setFieldValue={setFieldValue}
          value={values.image}
          touched={touched}
          errors={errors}
          className="mb-6 sm:mr-[60px] mr-0"
        />
        <div className="mb-6"></div>
      </div>
      <div className="flex flex-col xl:flex-row">
        <Input
          label="First Name*"
          id={"firstName"}
          name={"firstName"}
          type="text"
          placeholder="Enter Your First Name"
          {...getFieldProps("firstName")}
          touched={touched}
          errors={errors}
          className="mb-6 xl:mr-[60px]"
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
      <div className="flex flex-col xl:flex-row ">
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Enter Your Email"
          {...getFieldProps("email")}
          touched={touched}
          errors={errors}
          className="mb-6 xl:mr-[60px]"
          disabled
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
      <div className="flex flex-col xl:flex-row">
        <DatePicker
          label="Date of Birth"
          id="dob"
          name="dob"
          placeholder="Select date"
          value={values.dob}
          onChange={handleChange}
          touched={touched}
          errors={errors}
          className="mb-4 xl:mr-[60px]"
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
      <div className="flex flex-col xl:flex-row">
        <Button
          htmlType={"submit"}
          type="solid"
          className="mb-4 xl:mr-[60px]"
          block
        >
          Save
        </Button>
        <div className="w-full"></div>
      </div>
    </form>
  );
};

export default ProfileForm;
