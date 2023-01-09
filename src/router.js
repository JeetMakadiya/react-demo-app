import { createBrowserRouter, Navigate } from "react-router-dom";
import ChangePassword from "./Pages/ChangePassword";
import CreatePost from "./Pages/CreatePost";
import ForgotPassword from "./Pages/ForgotPassword";
import Login from "./Pages/Login";
import PostList from "./Pages/PostList";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import Verification from "./Pages/Verification";
import RootLayout from "./Components/Layouts/RootLayout";
import AppRoutes from "./Utils/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={AppRoutes.Login} replace />,
      },
      {
        path: AppRoutes.Login,
        element: <Login />,
      },
      {
        path: AppRoutes.Register,
        element: <Register />,
      },
      {
        path: AppRoutes.ForgotPassword,
        element: <ForgotPassword />,
      },
      {
        path: AppRoutes.Verification,
        element: <Verification />,
      },
      {
        path: AppRoutes.ResetPassword,
        element: <ResetPassword />,
      },
      {
        path: AppRoutes.CreatePost,
        element: <CreatePost />,
      },
      {
        path: AppRoutes.PostList,
        element: <PostList />,
      },
      {
        path: AppRoutes.Profile,
        element: <Profile />,
      },
      {
        path: AppRoutes.ChangePassword,
        element: <ChangePassword />,
      },
    ],
  },
]);
