import { createSlice } from "@reduxjs/toolkit";
// post details object
// {
//   userImage: "",
//   userName: "",
//   userEmail: "",
//   postDate: "",
//   postTime: "",
//   postLikes: [{userImage: "", userName: ""}],
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
    likePost(state, action) {
      let postId = action.payload.postId;
      let user = action.payload.user;
      state.posts[postId].postLikes.push(user);
    },
    unLikePost(state, action) {
      let postId = action.payload.postId;
      let user = action.payload.user;
      let postLikes = state.posts[postId].postLikes;
      let index = postLikes.findIndex(
        (item) => item.userName === user.userName
      );
      state.posts[postId].postLikes.splice(index, 1);
    },
  },
});

export const { createPost, likePost, unLikePost } = postSlice.actions;

export const postsReducer = postSlice.reducer;
