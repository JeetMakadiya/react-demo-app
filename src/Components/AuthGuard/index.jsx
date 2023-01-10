import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  //   useNavigate()
  if (isLoggedIn) {
  }
  return <>{children}</>;
};

export default AuthGuard;
