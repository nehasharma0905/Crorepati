/**
 * This is a slice file, for better management of state in redux, store can be divided in slices
 * and each slice can have its own reducer. Through these slices we can manage state, if we use store
 * directly then there will be a single store with huge amount of states and variables in it.
 *
 * Therefore we use slices in redux for better management of state. Also with this we can separate logics,
 * like all the logic related to login, signup, and user related logic in user slice.
 */

import { createSlice } from "@reduxjs/toolkit";

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

/**
 * createSlice is a function from @reduxjs/toolkit that is used to create slices.
 * It takes an object as an argument that has name and initialState. Only name and an initialState is required.
 * all other properties are optional. Name is used to identify the slice and initialState is the initial state of the slice.
 */

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // This is used to define actions that can be performed on the slice
    // These actions are synchronous.
    // no async-await
    /**
     * Process of reducer
     * dispatch -> reducer -> store
     * dispatch is used to call any reducer (both type reducers and async reducers)
     * reducer is used to update the state
     * store is modified according to the reducer
     */

    updateUserObject: (state, action) => {
      state.userObject = action.payload;
    },
    addAge: (state, action) => {
      state.userObject = {
        ...state.userObject,
        age: action.payload,
      };
    },
  },
  extraReducers: () => {
    // This is used to define extra reducers that can be used in the slice
    // These reducers are asynchronous.
  },
});

export const usersReducer = userSlice.reducer;
export const usersAction = userSlice.actions;
