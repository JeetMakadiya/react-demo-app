import React from "react";
import User from "../../Icons/User";

const Profile = () => {
  return (
    <div>
      <div className="w-screen flex items-center font-medium text-base border-b border-b-[#30567D] py-4 pl-5">
        <User size={40} color={"#FF7F00"} />
        <span className="ml-4">Profile</span>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Profile;
