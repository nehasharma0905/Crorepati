import { createAsyncThunk } from "@reduxjs/toolkit";
import { userSignUp } from "../api/authApi";
// import { testApi } from "../api/test";

// export const testThunk = createAsyncThunk('testThunk', async (arg, thunkAPI) => {
//     try {
//         const response = await testApi();
//         return response.data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

export const signUpThunk = createAsyncThunk('user/signUpThunk', async (userName, thunkAPI) => {
    try {
        const response = await userSignUp(userName);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});