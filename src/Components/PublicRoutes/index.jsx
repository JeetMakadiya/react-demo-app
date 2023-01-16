import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AppRoutes from "../../Utils/routes";

const PublicRoutes = ({ children }) => {
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  if (isLoggedIn) {
    return <Navigate to={AppRoutes.PostList} />;
  }
  return children;
};

export default PublicRoutes;
