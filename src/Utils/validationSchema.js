import { type } from "@testing-library/user-event/dist/type";
import * as Yup from "yup";

const emailShape = Yup.string()
  .email("*Invalid email address")
  .required("*Email address is required.");

const passwordShape = Yup.string()
  .required("*Password is required.")
  .matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
    "*password must contain 8 to 20 characters with at least one of each: uppercase, lowercase, number and special."
  );
const confirmPasswordShape = Yup.string()
  .required("*Confirm Password is required.")
  .oneOf([Yup.ref("password"), null], "Passwords must match.");
const firstNameShape = Yup.string().required("*First Name is required.");
const lastNameShape = Yup.string().required("*Last Name is required.");
const phoneNoShape = Yup.number().required("*Phone no is required.");
const dobShape = Yup.string()
  .nullable()
  .required("*Please Select Date Of Birth.");
const genderShape = Yup.string().required("*Gender is required.");
// Image validation Shape
const FILE_SIZE = 20 * 1024 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
const imageShape = Yup.mixed()
  .nullable()
  .required("*Please upload your image.")
  .test("FILE_FORMAT", "Uploaded file has unsupported format.", (value) => {
    return !value || (value && SUPPORTED_FORMATS.includes(value.type));
  })
  .test(
    "FILE_SIZE",
    "Uploaded file is too big.",
    (value) => !value || (value && value.size <= FILE_SIZE)
  );
const agreementShape = Yup.string().required("*You must have to agree.");

const validationSchema = {
  // Login Form Schema
  loginFormSchema: Yup.object({
    email: emailShape,
    password: passwordShape,
  }),
  registerFormSchema: Yup.object({
    image: imageShape,
    firstName: firstNameShape,
    lastName: lastNameShape,
    email: emailShape,
    phoneNo: phoneNoShape,
    password: passwordShape,
    confirmPassword: confirmPasswordShape,
    dob: dobShape,
    gender: genderShape,
    agreement: agreementShape,
  }),
  profileFormSchema: Yup.object({
    image: imageShape,
    firstName: firstNameShape,
    lastName: lastNameShape,
    email: emailShape,
    phoneNo: phoneNoShape,
    dob: dobShape,
    gender: genderShape,
  }),
  postFormSchema: Yup.object({
    image: imageShape,
    description: Yup.string().required("*Post Description is required."),
  }),
  changePasswordFormSchema: Yup.object({
    oldPassword: Yup.string()
      .required("*Old Password is required.")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
        "*password must contain 8 to 20 characters with at least one of each: uppercase, lowercase, number and special."
      ),
    newPassword: Yup.string()
      .required("*New Password is required.")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
        "*password must contain 8 to 20 characters with at least one of each: uppercase, lowercase, number and special."
      ),
    confirmPassword: Yup.string()
      .required("*Confirm Password is required.")
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match."),
  }),
};
export default validationSchema;
