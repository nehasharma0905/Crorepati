/**
 * This is a slice file, for better management of state in redux, store can be divided in slices
 * and each slice can have its own reducer. Through these slices we can manage state, if we use store
 * directly then there will be a single store with huge amount of states and variables in it.
 *
 * Therefore we use slices in redux for better management of state. Also with this we can separate logics,
 * like all the logic related to login, signup, and user related logic in user slice.
 */

import { createSlice } from "@reduxjs/toolkit";
import { signUpThunk } from "./userThunk";

/**
 * Here we have created initial state. These properties are defined based on use-cases.
 * Always try to keep it simple. If you need more properties, then add them here.
 * Don't write complex logic for accessing any property. Everything here should be
 * easily accessible and maintainable.
 */

const initialState = {
  isUserLoggedIn: false,
  userObject: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateLoginStatus: (state, action) => {
      state.isUserLoggedIn = action.payload.isLoggedIn;
      state.userObject = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpThunk.pending, (state) => {
      state.isLoading = true;
    }).addCase(signUpThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isUserLoggedIn = true;
      state.userObject = action.payload;
    }).addCase(signUpThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const usersReducer = userSlice.reducer;
export const usersAction = userSlice.actions;
