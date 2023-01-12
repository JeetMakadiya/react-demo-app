import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import loginPageSlider from "../../Images/loginPageSlider.png";

const images = [
  { url: loginPageSlider },
  { url: loginPageSlider },
  { url: loginPageSlider },
];

const LoginSlider = () => {
  return (
    <div className="xl:flex xl:justify-center xl:items-center h-[calc(100vh-58px)] bg-[#2F80ED] hidden flex-[4_4_0%]">
      <SimpleImageSlider
        width={800}
        height={500}
        images={images}
        showBullets={true}
        showNavs={false}
        bgColor={"transparent"}
        autoPlay={true}
      />
    </div>
  );
};

export default LoginSlider;
