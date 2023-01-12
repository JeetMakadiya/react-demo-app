import React from "react";
import maskGroup from "../../Images/maskGroup.png";
import group from "../../Images/Group.png";
import { useLocation } from "react-router-dom";
import AppRoutes from "../../Utils/routes";

const AuthLayout = ({ children }) => {
  const { pathname } = useLocation();
  const isRegisterPage = pathname.includes(AppRoutes.Register);
  console.log(isRegisterPage);
  return (
    <div className="flex flex-row min-h-[calc(100vh-58px)]">
      <div className="flex-[2_2_0%] xl:flex xl:flex-col xl:justify-between xl:items-center  h-[calc(100vh-58px)] bg-[#2F80ED] hidden">
        <span className="font-semibold text-[32px] text-white mt-28">
          Lorem Ipsum is simply <br /> dummy text of the printing <br /> and
          typesetting industry.{" "}
        </span>
        {isRegisterPage && (
          <div className=" w-[325px] h-[297px]">
            <img src={maskGroup} width={"100%"} height={"100%"} />
          </div>
        )}
        {!isRegisterPage && (
          <div className="w-[275px] h-[274px] mb-28">
            <img src={group} width={"100%"} height={"100%"} />
          </div>
        )}
      </div>
      <div className="flex-[4_4_0%] xl:h-[calc(100vh-58px)] overflow-y-auto flex justify-center xl:justify-start bg-white">
        <div className="mt-[72px] xl:ml-[75px]">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
