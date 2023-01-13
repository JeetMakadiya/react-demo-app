import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import Button from "../UI/Button";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="bg-white w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-9xl text-[#FF7F00]">{error.status}</h1>
      <p className="text-4xl mt-5">Oops!</p>
      <p className="text-xl mt-2">Sorry, an unexpected error has occurred.</p>
      <p className="mt-2">
        <i>{error.statusText || error.message}</i>
      </p>
      <Button
        type={"solid"}
        htmlType="button"
        className={"mt-5"}
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>
    </div>
  );
};

export default ErrorPage;
