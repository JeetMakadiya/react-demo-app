import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { protectedRoutes, publicRoutes } from "../../Utils/routes";

const AuthGuard = ({ children }) => {
  let { pathname } = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  const isPublicRoute = publicRoutes.includes(pathname);
  const isProtectedRoute = protectedRoutes.includes(pathname);

  // if (isPublicRoute && lo) {

  // }
  return <>{children}</>;
};

export default AuthGuard;
