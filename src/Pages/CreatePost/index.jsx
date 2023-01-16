import React from "react";
import CreatePostForm from "../../Components/CreatePostForm";
import ProtectedRoutes from "../../Components/ProtectedRoutes";

const CreatePost = () => {
  return (
    <ProtectedRoutes>
      <div className="mt-[31px] mx-[39px] mb-[114px]">
        <h1 className="text-2xl font-bold mb-[30px]">Create Post</h1>
        <div className="lg:w-[809px] w-full">
          <CreatePostForm className={"mt-2"} />
        </div>
      </div>
    </ProtectedRoutes>
  );
};

export default CreatePost;
