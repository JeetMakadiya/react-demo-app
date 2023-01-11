import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { useFormik } from "formik";
import validationSchema from "../../Utils/validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, checkOldPassword } from "../../Store/Auth";
import { showToast } from "../../Utils/showToast";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../Utils/routes";

const ChangePasswordForm = ({ className }) => {
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
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema.changePasswordFormSchema,
    onSubmit: async (values) => {
      dispatch(checkOldPassword(values.oldPassword));
      if (!authState.isRightOldPassword) {
        showToast("error", "Wrong Old Password.");
      }
      if (authState.isRightOldPassword) {
        dispatch(
          changePassword({
            password: values.newPassword,
            email: authState.loggedInUserDetails.email,
          })
        );
        showToast("success", "Password Changed Successfully.");
        resetForm();
        navigate(AppRoutes.Profile);
      }
    },
  });
  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      <Input
        label="Old Password*"
        id={"oldPassword"}
        name={"oldPassword"}
        type="password"
        placeholder="Enter Your Old Password"
        {...getFieldProps("oldPassword")}
        touched={touched}
        errors={errors}
        className="mb-4 mr-[60px]"
      />
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
        className="mb-4"
      />
      <Button type="solid" htmlType={"submit"} className="mb-4" block>
        Save
      </Button>
    </form>
  );
};

export default ChangePasswordForm;
