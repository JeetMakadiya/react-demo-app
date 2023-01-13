import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SidePane } from "react-side-pane";
import Logo from "../../Icons/Logo";
import NavMenu from "../../Icons/NavMenu";
import User from "../../Icons/User";
import AppRoutes from "../../Utils/routes";
import Button from "../UI/Button";

const Navbar = () => {
  const [openSidepane, setOpenSidepane] = useState(false);
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
        <NavMenu
          color={"white"}
          size={"30px"}
          className="md:hidden"
          onClick={() => setOpenSidepane(true)}
        />
        <div className="md:flex md:items-center hidden">
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
                <span className="mt-1 flex justify-center items-center">
                  <img
                    src={authState.loggedInUserDetails.image}
                    className="w-[26.67px] h-[26.67px] rounded-full mr-2"
                  />
                  <span className="text-white">{loggedInUserName}</span>
                </span>
              </Link>
            </>
          )}
        </div>
        <SidePane
          open={openSidepane}
          autoWidth={true}
          onClose={() => setOpenSidepane(false)}
        >
          <div className="relative flex flex-col px-6 pt-16 w-72">
            <span
              className="absolute top-2 left-4 text-xl font-bold text-[#FF7F00]"
              onClick={() => setOpenSidepane(false)}
            >
              x
            </span>
            {!authState.isLoggedIn && (
              <>
                <Link to={AppRoutes.Login}>
                  <Button type="outlined-orange" block className="mb-6">
                    Login
                  </Button>
                </Link>
                <Link to={AppRoutes.Register}>
                  <Button type="solid" block>
                    Register
                  </Button>
                </Link>
              </>
            )}
            {authState.isLoggedIn && (
              <>
                <Link to={AppRoutes.Profile}>
                  <span className="mt-1 flex justify-center mb-6">
                    <User color={"#FF7F00"} size={26.67} className="mr-2" />
                    <span className="text-[#FF7F00]">{loggedInUserName}</span>
                  </span>
                </Link>
                <Link to={AppRoutes.CreatePost}>
                  <Button type="outlined-orange" block className="mr-5">
                    Create Post
                  </Button>
                </Link>
              </>
            )}
          </div>
        </SidePane>
      </div>
    </>
  );
};

export default Navbar;
