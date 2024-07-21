import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  generateGame,
  getLifeLineStatus,
  getNextQuestion,
} from "../api/quizApi";

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

export const getLifeLineUsedThunk = createAsyncThunk(
  "quiz/getLifeLineUsedThunk",
  async (data, thunkAPI) => {
    try {
      const response = await getLifeLineStatus(
        data.gameId,
        data.questionId,
        data.lifeLineId
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
