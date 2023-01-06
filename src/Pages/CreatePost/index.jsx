import React from "react";
import CreatePostForm from "../../Components/CreatePostForm";

const CreatePost = () => {
  return (
    <div className="mt-[31px] ml-[39px] mb-[114px]" style={{ width: "480px" }}>
      <h1 className="text-2xl font-bold mb-[30px]">Create Post</h1>
      <CreatePostForm className={"mt-2"} />
    </div>
  );
};

export default CreatePost;
