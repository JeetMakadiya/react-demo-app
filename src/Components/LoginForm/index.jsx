import React from "react";
import Input from "../UI/Input";
import Checkbox from "../UI/Checkbox";
import Button from "../UI/Button";
import AppRoutes from "../../Utils/routes";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import validationSchema from "../../Utils/validationSchema";
import { checkLogin } from "../../Utils/auth.utils";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Store/Auth";
import { showToast } from "../../Utils/showToast";

const LoginForm = ({ className }) => {
  const dispatch = useDispatch();
  const authState = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const { handleChange, values, handleSubmit, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validationSchema.loginFormSchema,
      onSubmit: async (values) => {
        console.log(values);
        if (await checkLogin(authState.users, values)) {
          await dispatch(login(values));
          showToast("success", "User Logged In Successfully");
          navigate(AppRoutes.PostList);
        } else {
          showToast("error", "Please Enter valid email/password.");
        }
      },
    });
  console.log(authState);
  return (
    <form className={`${className}`} onSubmit={handleSubmit}>
      <Input
        label="Email"
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        value={values.email}
        onBlur={handleBlur}
        placeholder="Enter Your Email"
        className="mb-6"
        touched={touched}
        errors={errors}
      />
      <Input
        label="Password"
        id="password"
        name="password"
        type="password"
        onChange={handleChange}
        value={values.password}
        onBlur={handleBlur}
        placeholder="Enter Your Password"
        className="mb-4"
        touched={touched}
        errors={errors}
      />
      <div className="w-full flex justify-between mb-[42px]">
        <Checkbox label="Remember Me" labelColor={"#FF7F00"} />
        <Link to={AppRoutes.ForgotPassword}>
          <a className="text-[#FF7F00] text-sm font-normal cursor-pointer hover:underline">
            Forgot Password?
          </a>
        </Link>
      </div>
      <Button htmlType={"submit"} type="solid" block>
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
