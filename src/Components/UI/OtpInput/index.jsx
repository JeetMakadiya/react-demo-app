import React, { useState } from "react";
import OtpInput from "react-otp-input";

const NewOtpInput = ({
  value,
  numInputs,
  separator,
  className,
  setOtp,
  otp,
  ...props
}) => {
  const handleChange = (otp) => setOtp(otp);

  return (
    <div className={`w-full flex justify-center ${className}`}>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={4}
        placeholder={"0000"}
        inputStyle={{
          backgroundColor: "#F7F9FC",
          width: "52px",
          height: "52px",
          outlineColor: "#FF7F00",
          borderRadius: "4px",
          margin: "0 15px",
          border: "1px solid #ff7f00",
        }}
        focusStyle={{ border: "1px solid #ff7f00" }}
        errorStyle={{ border: "1px solid red" }}
        hasErrored={false}
      />
    </div>
  );
};

export { NewOtpInput as OtpInput };
