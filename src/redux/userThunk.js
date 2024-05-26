import { createAsyncThunk } from "@reduxjs/toolkit";
import { testApi } from "../api/test";

export const testThunk = createAsyncThunk('testThunk', async (arg, thunkAPI) => {
    try {
        const response = await testApi();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});