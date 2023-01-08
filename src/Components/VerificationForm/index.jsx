import React from "react";
import Button from "../UI/Button";
import { OtpInput } from "../UI/OtpInput";

const VerificationForm = ({ className }) => {
  return (
    <form action="" className={`${className}`}>
      <div className="flex flex-col">
        <OtpInput numInputs={4} />
        <div className="flex justify-center mt-[30px] text-[#FF7F00] text-sm font-normal">
          RESEND
        </div>
        <Button type="solid" className="mb-[30px] mt-[53px]" block>
          Verify
        </Button>
        <Button type="outlined-orange" block>
          Change Email
        </Button>
      </div>
    </form>
  );
};

export default VerificationForm;
