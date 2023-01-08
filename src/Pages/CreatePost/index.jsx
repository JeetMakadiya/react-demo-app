import React from "react";
import CreatePostForm from "../../Components/CreatePostForm";

const CreatePost = () => {
  return (
    <div className="mt-[31px] mx-[39px] mb-[114px]">
      <h1 className="text-2xl font-bold mb-[30px]">Create Post</h1>
      <div className="lg:w-[809px] w-full">
        <CreatePostForm className={"mt-2"} />
      </div>
    </div>
  );
};

export default CreatePost;
