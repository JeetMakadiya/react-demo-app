import React from "react";
import Cake from "../../Icons/Cake";
import Female from "../../Icons/Female";
import Mail from "../../Icons/Mail";
import Phone from "../../Icons/Phone";
import UserImg from "../../Images/user.png";
import Button from "../UI/Button";

const ProfileCard = () => {
  return (
    <div className="sm:w-[380px] w-[300px] bg-white flex flex-col items-center pt-[45px] px-[18px]">
      <div>
        <img
          src={UserImg}
          alt=""
          className="w-[170px] h-[170px] mb-[21px]"
          srcset=""
        />
        <span className="text-2xl font-medium text-[#252525]">
          {"Darrell Steward"}
        </span>
      </div>
      <div className="bg-[#F9F9FC] sm:w-[344px] w-[270px] mt-[37px] pt-[18px] pl-[18px]">
        <div className="text-sm ml-3 mb-6 flex items-center">
          <Mail size={"20px"} color={"#5E6367"} className="mr-4" />
          <span className="text-[#5E6367]">{"jane.cooper@gmail.com"}</span>
        </div>
        <div className="text-sm ml-3 mb-6 flex items-center">
          <Phone size={"20px"} color={"#5E6367"} className="mr-4" />
          <span className="text-[#5E6367]">{"987 654 3210"}</span>
        </div>
        <div className="text-sm ml-3 mb-6 flex items-center">
          <Female size={"20px"} color={"#5E6367"} className="mr-4" />
          <span className="text-[#5E6367]">{"Female"}</span>
        </div>
        <div className="text-sm ml-3 mb-3 flex items-center">
          <Cake size={"20px"} color={"#5E6367"} className="mr-4" />
          <span className="text-[#5E6367]">{"12/12/1994"}</span>
        </div>
      </div>
      <div className="mt-9 mb-[30px] w-[170px] flex flex-col">
        <Button type={"outlined-orange"} block className="mb-6">
          Change Password
        </Button>
        <Button type={"outlined-orange"} block>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
