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
const confirmPasswordShape = Yup.string().oneOf(
  [Yup.ref("password"), null],
  "Passwords must match."
);
const firstNameShape = Yup.string().required("*First Name is required.");
const lastNameShape = Yup.string().required("*Last Name is required.");
const phoneNoShape = Yup.number().required("*Phone no is required.");
const dobShape = Yup.string().required("*Please Select Date Of Birth.");
const genderShape = Yup.string().required("*Gender is required.");
const imageShape = Yup.string().required("*Please upload your image.");
const agreementShape = Yup.string().required("*You must have to agree.");

const validationSchema = {
  // Login Form Schema
  loginFormSchema: Yup.object({
    email: emailShape,
    password: passwordShape,
  }),
  registerFormSchema: Yup.object({
    firstName: firstNameShape,
    lastName: lastNameShape,
    email: emailShape,
    phoneNo: phoneNoShape,
    password: passwordShape,
    confirmPassword: confirmPasswordShape,
    dob: dobShape,
    gender: genderShape,
    agreementShape: agreementShape,
  }),
};
export default validationSchema;
