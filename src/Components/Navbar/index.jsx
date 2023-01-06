import React from "react";
import Logo from "../../Icons/Logo";
import Button from "../UI/Button";

const Navbar = () => {
  return (
    <div className="bg-[#242F3A] h-[58px] w-full flex justify-between items-center pl-5 pr-5">
      <Logo width={141.58} height={35.01} />
      <div className="flex items-center">
        <Button type="outlined-white" className="mr-5">
          Login
        </Button>
        <Button type="solid">Register</Button>
        {/* <Button type="outlined-white" className="mr-5">
          Create Post
        </Button>
        <span className="mt-1 inline-flex">
          <User size={26.67} className="mr-2" />
          <span className="text-white">Darrell Steward</span>
        </span> */}
      </div>
    </div>
  );
};

export default Navbar;
