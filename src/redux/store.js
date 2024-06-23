import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./userSlice";
import { quizReducer } from "./quizSlice";

/**
 * This is a store file, for better management of state in redux, store can be divided in slices.
 * A store is like a single object with all the slices in it. You have to import the slices in store
 * if you don't add them in store they will not be accessible.
 *
 * It is a simple object no logic is required. Just add all the slices in reducer. Reducers here and reducer
 * in slice have different functionalities here it is just responsible to collect all the state
 * and provide it to the app.
 */

export const store = configureStore({
  reducer: {
    users: usersReducer,
    quiz : quizReducer,
  },
});
