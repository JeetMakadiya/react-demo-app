import { RouterProvider } from "react-router-dom";
import "./App.css";
import { protectedRouter, publicRouter } from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  const [router, setRouter] = useState(
    isLoggedIn ? protectedRouter : publicRouter
  );
  useEffect(() => {
    const routerValue = isLoggedIn ? protectedRouter : publicRouter;
    setRouter(routerValue);
  }, [isLoggedIn]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
