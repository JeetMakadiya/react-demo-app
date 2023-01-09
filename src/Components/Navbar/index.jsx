import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Icons/Logo";
import User from "../../Icons/User";
import AppRoutes from "../../Utils/routes";
import Button from "../UI/Button";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#242F3A] h-[58px] w-full flex justify-between items-center px-5">
        <Logo width={141.58} height={35.01} />
        <div className="flex items-center">
          <Link to={AppRoutes.Login}>
            <Button type="outlined-white" className="sm:mr-5 mr-2">
              Login
            </Button>
          </Link>
          <Link to={AppRoutes.Register}>
            <Button type="solid">Register</Button>
          </Link>
          {/* <Link to={AppRoutes.CreatePost}>
            <Button type="outlined-white" className="mr-5">
              Create Post
            </Button>
          </Link>
          <Link to={AppRoutes.Profile}>
            <span className="mt-1 inline-flex">
              <User color={"white"} size={26.67} className="mr-2" />
              <span className="text-white">Darrell Steward</span>
            </span>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
