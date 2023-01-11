import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Icons/Logo";
import User from "../../Icons/User";
import AppRoutes from "../../Utils/routes";
import Button from "../UI/Button";

const Navbar = () => {
  const authState = useSelector((store) => store.auth);
  const navigate = useNavigate();
  let loggedInUserName = "";
  if (authState.loggedInUserDetails) {
    loggedInUserName =
      authState.loggedInUserDetails.firstName +
      " " +
      authState.loggedInUserDetails.lastName;
  }
  return (
    <>
      <div className="bg-[#242F3A] h-[58px] w-full flex justify-between items-center px-5">
        <Logo
          width={141.58}
          height={35.01}
          onClick={() => navigate(AppRoutes.PostList)}
          className="cursor-pointer"
        />
        <div className="flex items-center">
          {!authState.isLoggedIn && (
            <>
              <Link to={AppRoutes.Login}>
                <Button type="outlined-white" className="sm:mr-5 mr-2">
                  Login
                </Button>
              </Link>
              <Link to={AppRoutes.Register}>
                <Button type="solid">Register</Button>
              </Link>
            </>
          )}
          {authState.isLoggedIn && (
            <>
              <Link to={AppRoutes.CreatePost}>
                <Button type="outlined-white" className="mr-5">
                  Create Post
                </Button>
              </Link>
              <Link to={AppRoutes.Profile}>
                <span className="mt-1 inline-flex">
                  <User color={"white"} size={26.67} className="mr-2" />
                  <span className="text-white">{loggedInUserName}</span>
                </span>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
