import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoggedIn: false,
  loggedInUserDetails: null,
  isRightOldPassword: false,
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
    updateDetails(state, action) {
      const user = action.payload;
      const itemIndex = state.users.findIndex(
        (item) => item.email === user.email
      );
      state.users[itemIndex].image = user.image;
      state.users[itemIndex].firstName = user.firstName;
      state.users[itemIndex].lastName = user.lastName;
      state.users[itemIndex].phoneNo = user.phoneNo;
      state.users[itemIndex].dob = user.dob;
      state.users[itemIndex].gender = user.gender;
      state.loggedInUserDetails.image = user.image;
      state.loggedInUserDetails.firstName = user.firstName;
      state.loggedInUserDetails.lastName = user.lastName;
      state.loggedInUserDetails.phoneNo = user.phoneNo;
      state.loggedInUserDetails.dob = user.dob;
      state.loggedInUserDetails.gender = user.gender;
    },
    resetPassword(state, action) {
      const itemIndex = state.users.findIndex(
        (item) => item.email === action.payload.email
      );
      state.users[itemIndex].password = action.payload.password;
    },
    checkOldPassword(state, action) {
      if (state.loggedInUserDetails.password === action.payload) {
        state.isRightOldPassword = true;
      } else {
        state.isRightOldPassword = false;
      }
    },
    changePassword(state, action) {
      const itemIndex = state.users.findIndex(
        (item) => item.email === action.payload.email
      );
      state.users[itemIndex].password = action.payload.password;
      state.loggedInUserDetails.password = action.payload.password;
      state.isRightOldPassword = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.loggedInUserDetails = null;
      state.isRightOldPassword = false;
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
  updateDetails,
  checkOldPassword,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
