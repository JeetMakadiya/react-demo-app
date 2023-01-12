import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calender from "../../Icons/Calender";
import Clock from "../../Icons/Clock";
import Like from "../../Icons/Like";
import More from "../../Icons/More";
import { likePost } from "../../Store/Post";
import DisplayMedia from "../DisplayMedia";
import Modal from "../Modal";

const PostCard = ({
  userImage,
  userName,
  date,
  time,
  description,
  mediaList,
  userEmail,
  postId,
}) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const state = useSelector((store) => store);
  const authState = state.auth;
  const postState = state.post;
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleLike = () => {
    dispatch(
      likePost({
        postId: postId,
        user: {
          userImage: authState.loggedInUserDetails.image,
          userName:
            authState.loggedInUserDetails.firstName +
            " " +
            authState.loggedInUserDetails.lastName,
        },
      })
    );
  };
  return (
    <>
      <div className="mt-3 bg-white shadow-white p-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={userImage} className="w-[68px] h-[68px] rounded-full" />
            <div className="ml-[18px]">
              <span className="text-lg font-semibold text-[#222A33]">
                {userName}
              </span>
              <div className="flex flex-col sm:flex-row mt-2 opacity-30">
                <div className="flex items-center mr-4">
                  <Calender size={"16px"} color={"#9494AE"} />
                  <span className="ml-1 text-sm">{date}</span>
                </div>
                <div className="flex items-center mr-4">
                  <Clock size={"16px"} color={"#9494AE"} />
                  <span className="ml-1 text-sm">{time}</span>
                </div>
                <div className="flex items-center mr-4 cursor-pointer">
                  <Like size={"16px"} color={"#9494AE"} onClick={handleLike} />
                  <span className="ml-1 text-sm" onClick={showModal}>
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
        <DisplayMedia
          className="mt-[19px]"
          size={"small"}
          mediaList={mediaList}
        />
      </div>
      <Modal
        title={"Liked By"}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        userList={postState.posts[postId].postLikes}
      />
    </>
  );
};

export default PostCard;
