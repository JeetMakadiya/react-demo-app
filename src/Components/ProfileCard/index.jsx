import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cake from "../../Icons/Cake";
import Female from "../../Icons/Female";
import Mail from "../../Icons/Mail";
import Phone from "../../Icons/Phone";
import { logout } from "../../Store/Auth";
import AppRoutes from "../../Utils/routes";
import Button from "../UI/Button";

const ProfileCard = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((store) => store.auth.loggedInUserDetails);
  const navigate = useNavigate();
  const { image, firstName, lastName, email, phoneNo, gender, dob } =
    userDetails;
  const handleLogout = () => {
    dispatch(logout());
    navigate(AppRoutes.Login);
  };
  return (
    <div className="lg:flex-[1_1_0%] md:flex-[2_2_0%] w-full bg-white flex flex-col items-center py-8 px-[18px] rounded">
      <div>
        <img
          src={image}
          alt=""
          className="w-[140px] h-[140px] mb-[21px] rounded-full"
          srcset=""
        />
        <span className="text-2xl font-medium text-[#252525]">
          {firstName + " " + lastName}
        </span>
      </div>
      <div className="bg-[#F9F9FC] w-full mt-6 pt-[18px] pl-[18px]">
        <div className="text-sm ml-3 mb-6 flex items-center break-all">
          <Mail size={"20px"} color={"#5E6367"} className="mr-4" />
          <span className="text-[#5E6367]">{email}</span>
        </div>
        <div className="text-sm ml-3 mb-6 flex items-center">
          <Phone size={"20px"} color={"#5E6367"} className="mr-4" />
          <span className="text-[#5E6367]">{phoneNo}</span>
        </div>
        <div className="text-sm ml-3 mb-6 flex items-center">
          <Female size={"20px"} color={"#5E6367"} className="mr-4" />
          <span className="text-[#5E6367]">{gender}</span>
        </div>
        <div className="text-sm ml-3 mb-3 flex items-center">
          <Cake size={"20px"} color={"#5E6367"} className="mr-4" />
          <span className="text-[#5E6367]">{dob}</span>
        </div>
      </div>
      <div className="mt-8 w-[170px] flex flex-col">
        <Button
          type={"outlined-orange"}
          block
          className="mb-6"
          onClick={() => {
            navigate(AppRoutes.ChangePassword);
          }}
        >
          Change Password
        </Button>
        <Button type={"outlined-orange"} block onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
