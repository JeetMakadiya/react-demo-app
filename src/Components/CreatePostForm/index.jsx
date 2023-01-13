import React from "react";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../Utils/routes";
import Button from "../UI/Button";
import Textarea from "../UI/Textarea";
import { useFormik } from "formik";
import AddMedia from "../AddMedia";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../Store/Post";
import { showToast } from "../../Utils/showToast";

const CreatePostForm = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((store) => store.auth);
  const {
    getFieldProps,
    handleSubmit,
    touched,
    errors,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      postDescription: "",
      medias: [],
    },
    onSubmit: async (values) => {
      const dateObj = new Date();
      let date = dateObj.toLocaleDateString();
      let time = dateObj.toLocaleTimeString();
      let postDetails = {
        userImage: authState.loggedInUserDetails.image,
        userName:
          authState.loggedInUserDetails.firstName +
          " " +
          authState.loggedInUserDetails.lastName,
        userEmail: authState.loggedInUserDetails.email,
        postDate: date,
        postTime: time,
        postLikes: [],
        postDescription: values.postDescription,
        postMedias: values.medias,
      };
      dispatch(createPost(postDetails));
      showToast("success", "Post Created Successfully");
      resetForm();
      navigate(AppRoutes.PostList);
    },
  });
  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      <Textarea
        label={"Add a Description"}
        id="postDescription"
        name="postDescription"
        labelColor={"#5E6367"}
        placeholder={"Research and improve customer satisfaction"}
        {...getFieldProps("postDescription")}
        touched={touched}
        errors={errors}
      />
      <AddMedia
        className={"mt-[19px]"}
        setFieldValue={setFieldValue}
        name={"medias"}
      />
      <div className="mt-4 flex sm:flex-row justify-center flex-col items-center bg-white py-6">
        <Button
          type={"outlined-orange"}
          className="sm:mr-4 sm:mb-0 mb-5"
          onClick={() => navigate(AppRoutes.PostList)}
        >
          Cancel
        </Button>
        <Button htmlType={"submit"} type={"solid"}>
          Create Post
        </Button>
      </div>
    </form>
  );
};

export default CreatePostForm;
