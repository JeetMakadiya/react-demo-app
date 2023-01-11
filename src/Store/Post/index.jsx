import { createSlice } from "@reduxjs/toolkit";
// post details object
// {
//   userImage: "",
//   userName: "",
//   userEmail: "",
//   postDate: "",
//   postTime: "",
//   postLikes: [],
//   postDescription: "",
//   postMedias: [],
// }

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    createPost(state, action) {
      state.posts.push(action.payload);
    },
  },
});

export const { createPost } = postSlice.actions;

export const postsReducer = postSlice.reducer;
