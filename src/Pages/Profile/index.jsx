import React from "react";
import ProfileCard from "../../Components/ProfileCard";
import ProfileForm from "../../Components/ProfileForm";
import ProtectedRoutes from "../../Components/ProtectedRoutes";
import UserIcon from "../../Icons/User";

const Profile = () => {
  return (
    <ProtectedRoutes>
      <div>
        <div
          className="py-3 pl-5 flex items-center font-semibold"
          style={{ borderBottom: "1px solid rgba(48, 86, 125, 0.1)" }}
        >
          <UserIcon size={40} color={"#FF7F00"} className="mr-4" />
          <span className="text-2xl font-bold text-[#222A33]">Profile</span>
        </div>
        <div className="flex md:flex-row flex-col md:items-stretch items-center px-6 py-4">
          <ProfileCard />
          <div className="lg:flex-[4_4_0%] md:flex-[4_4_0%] w-full md:ml-[22px] pt-8 sm:px-8 px-4 bg-white shadow-2xl mt-6 md:mt-0 rounded">
            <div className="flex-1">
              <ProfileForm />
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoutes>
  );
};

export default Profile;
