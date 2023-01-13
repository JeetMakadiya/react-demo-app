const AppRoutes = {
  Login: "/login",
  Register: "/register",
  ForgotPassword: "/forgotpassword",
  Verification: "/verification",
  ResetPassword: "/resetpassword",
  CreatePost: "/createpost",
  PostList: "/postlist",
  Profile: "/profile",
  ChangePassword: "/changepassword",
};

const publicRoutes = [
  "/login",
  "/register",
  "/forgotpassword",
  "/verification",
  "/resetPassword",
];

const protectedRoutes = [
  "/createpost",
  "/postlist",
  "/profile",
  "/changepassword",
];

export default AppRoutes;
export { publicRoutes, protectedRoutes };
