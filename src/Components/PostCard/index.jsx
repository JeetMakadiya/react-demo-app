import React, { useState } from "react";
import Calender from "../../Icons/Calender";
import Clock from "../../Icons/Clock";
import Like from "../../Icons/Like";
import More from "../../Icons/More";
import UserImage from "../../Images/user.png";
import DisplayMedia from "../DisplayMedia";

const PostCard = ({ userImage, userName, date, time, description, media }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mt-3 bg-slate-200 shadow-slate-200 p-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={UserImage}
              alt=""
              srcset=""
              className="w-[68px] h-[68px]"
            />
            <div className="ml-[18px]">
              <span className="text-lg font-semibold text-[#222A33]">
                {userName}
              </span>
              <div className="flex mt-2 opacity-30">
                <div className="flex items-center mr-4">
                  <Calender size={"16px"} color={"#9494AE"} />
                  <span className="ml-1 text-sm">{date}</span>
                </div>
                <div className="flex items-center mr-4">
                  <Clock size={"16px"} color={"#9494AE"} />
                  <span className="ml-1 text-sm">{time}</span>
                </div>
                <div
                  className="flex items-center mr-4 cursor-pointer"
                  onClick={showModal}
                >
                  <Like size={"16px"} color={"#9494AE"} />
                  <span className="ml-1 text-sm">
                    Liked by John and 50 others
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <More size={"12px"} color={"#9494AE"} />
          </div>
        </div>
        <p className="font-medium text-[#222A33] mt-5">{description}</p>
        <DisplayMedia className="mt-[19px]" size={"small"} />
      </div>
      {/* <Modal isModalOpen={isModalOpen} handleCancel={handleCancel} /> */}
    </>
  );
};

export default PostCard;