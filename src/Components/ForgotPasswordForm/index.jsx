import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useFormik } from "formik";
import validationSchema from "../../Utils/validationSchema";
import { isUserExist } from "../../Utils/auth.utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../Utils/showToast";
import AppRoutes from "../../Utils/routes";

const ForgotPasswordForm = ({ className }) => {
  const [showResend, setShowResend] = useState(false);
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
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema.forgotPasswordFormSchema,
    onSubmit: async (values) => {
      const emailExist = await isUserExist(authState.users, values.email);
      if (emailExist) {
        navigate(AppRoutes.Verification + `?email=${values.email}`);
        showToast(
          "success",
          "Verification Code Sent To Your Registered Mobile no.:1234"
        );
        setShowResend(true);
      } else {
        showToast("error", "Wrong Email Address.");
      }
    },
  });
  return (
    <form onSubmit={handleSubmit} className={`flex flex-col ${className}`}>
      <Input
        label="Email"
        id="email"
        name="email"
        type="email"
        placeholder="Enter Your Email"
        {...getFieldProps("email")}
        touched={touched}
        errors={errors}
        className="mb-6"
      />
      <button
        type="button"
        className="mt-3 text-[#FF7F00] text-sm font-normal cursor-pointer"
        onClick={() => resetForm()}
      >
        RESET
      </button>
      <Button type="solid" htmlType={"submit"} className="mb-4 mt-[53px]" block>
        Send
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
