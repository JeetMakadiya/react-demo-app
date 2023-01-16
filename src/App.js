import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import RootLayout from "./Components/Layouts/RootLayout";
import Login from "./Pages/Login";
import AppRoutes from "./Utils/routes";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import Verification from "./Pages/Verification";
import ResetPassword from "./Pages/ResetPassword";
import CreatePost from "./Pages/CreatePost";
import PostList from "./Pages/PostList";
import Profile from "./Pages/Profile";
import ChangePassword from "./Pages/ChangePassword";

function App() {
  const routeData = [
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
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {routeData.map((item) => {
            return <Route {...item} />;
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
