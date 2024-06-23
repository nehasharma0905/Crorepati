import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateGame, getNextQuestion } from "../api/quizApi";

export const generateGameThunk = createAsyncThunk(
  "quiz/generateGameThunk",
  async (_, thunkAPI) => {
    try {
        const response = await generateGame();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getNextQuestionThunk = createAsyncThunk(
    "quiz/getNextQuestionThunk",
    async (gameId, thunkAPI) => {
        try {
        const response = await getNextQuestion(gameId);
        return response.data;
        } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
        }
    }
    );