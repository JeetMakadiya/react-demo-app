import React from "react";
import DisplayMedia from "../DisplayMedia";
import Button from "../UI/Button";
import Textarea from "../UI/Textarea";

const CreatePostForm = ({ className }) => {
  return (
    <form className={`${className}`}>
      <Textarea
        label={"Add a Description"}
        labelColor={"#5E6367"}
        name="postDescription"
        placeholder={"Research and improve customer satisfaction"}
      />
      <Button type={"solid"} className="mt-[19px]">
        Add Media
      </Button>
      <DisplayMedia className="mt-[35px]" size={"large"} />
      <div className="mt-[76px] flex justify-center">
        <Button type={"outlined-orange"} className="mr-4">
          Cancel
        </Button>
        <Button type={"solid"}>Create Post</Button>
      </div>
    </form>
  );
};

export default CreatePostForm;
