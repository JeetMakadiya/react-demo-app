import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AppRoutes from "../../Utils/routes";
import { showToast } from "../../Utils/showToast";
import Button from "../UI/Button";
import { OtpInput } from "../UI/OtpInput";

const VerificationForm = ({ className }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const [otp, setOtp] = useState();
  const verifyOTP = () => {
    if (otp === "1234") {
      showToast("success", "OTP Verified");
      navigate(AppRoutes.ResetPassword + `?email=${email}`);
    } else {
      showToast("error", "Wrong OTP");
    }
  };
  return (
    <div className="flex flex-col">
      <OtpInput numInputs={4} otp={otp} setOtp={setOtp} />
      <div className="flex justify-center mt-[30px] text-[#FF7F00] text-sm font-normal">
        RESEND
      </div>
      <Button
        type="solid"
        htmlType={"button"}
        className={`mb-[30px] mt-[53px]`}
        onClick={verifyOTP}
        block
      >
        Verify
      </Button>
      <Button
        type="outlined-orange"
        htmlType={"button"}
        onClick={() => {
          navigate(AppRoutes.ForgotPassword);
        }}
        block
      >
        Change Email
      </Button>
    </div>
  );
};

export default VerificationForm;
