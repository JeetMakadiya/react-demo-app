import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoggedIn: false,
  loggedInUserDetails: null,
  isUserExist: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const item = state.users.find(
        (item) =>
          item.email === action.payload.email &&
          item.password === action.payload.password
      );
      state.isLoggedIn = true;
      state.loggedInUserDetails = item;
    },
    register(state, action) {
      state.users.push(action.payload);
    },
    forgotPassword(state, action) {},
    resetPassword(state, action) {},
    changePassword(state, action) {},
    logout(state) {
      state.isLoggedIn = false;
      state.loggedInUserDetails = null;
    },
  },
});

export const {
  login,
  register,
  forgotPassword,
  resetPassword,
  changePassword,
  logout,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
