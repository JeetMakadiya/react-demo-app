import React from "react";
import Button from "../UI/Button";
import { OtpInput } from "../UI/OtpInput";

const VerificationForm = ({ className }) => {
  return (
    <form action="" className={`${className}`}>
      <div className="flex flex-col">
        <OtpInput numInputs={4} />
        <div className="w-[342px] flex justify-center mt-[30px] text-[#FF7F00] text-sm font-normal">
          RESEND
        </div>
        <Button type="solid" size="large" className="mb-[30px] mt-[53px]">
          Verify
        </Button>
        <Button type="outlined-orange" size="large">
          Change Email
        </Button>
      </div>
    </form>
  );
};

export default VerificationForm;
