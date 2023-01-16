import React from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useFormik } from "formik";
import validationSchema from "../../Utils/validationSchema";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../Store/Auth";
import { showToast } from "../../Utils/showToast";
import AppRoutes from "../../Utils/routes";

const ResetPasswordForm = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchparams] = useSearchParams();
  const email = searchparams.get("email");
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
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema.resetPasswordFormSchema,
    onSubmit: async (values) => {
      dispatch(resetPassword({ email, password: values.newPassword }));
      showToast("success", "Password Reseted Successfully");
      navigate(AppRoutes.Login);
    },
  });
  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      <Input
        label="New Password*"
        id={"newPassword"}
        name={"newPassword"}
        type="password"
        placeholder="Enter Your New Password"
        {...getFieldProps("newPassword")}
        touched={touched}
        errors={errors}
        className="mb-4 mr-[60px]"
      />
      <Input
        label="Confirm Password*"
        id={"confirmPassword"}
        name={"confirmPassword"}
        type="password"
        placeholder="Enter Your New Password"
        {...getFieldProps("confirmPassword")}
        touched={touched}
        errors={errors}
        className="mb-6"
      />
      <Button type="solid" htmlType={"submit"} className="mb-4" block>
        Save
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
