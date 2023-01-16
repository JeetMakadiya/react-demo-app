import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AppRoutes from "../../Utils/routes";

const ProtectedRoutes = ({ children }) => {
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to={AppRoutes.Login} />;
};

export default ProtectedRoutes;
