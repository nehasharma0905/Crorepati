import { createSlice } from "@reduxjs/toolkit";
import { generateGameThunk, getNextQuestionThunk } from "./quizThunk";
import { clear } from "localforage";


const initialState = {
    quiz: null,
    isLoading: true,
    error: null,
    activeQuestionData: null,
    questionStatus: {
        isLoading: false,
        error: null,
    }
};

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setQuiz: (state, action) => {
        state.quiz = action.payload;
        },
        clearQuizSlice: (state) => {
            state.quiz = initialState.quiz;
            state.activeQuestionData = initialState.activeQuestionData;
            state.questionStatus = initialState.questionStatus;
            state.isLoading = initialState.isLoading;
            state.error = initialState.error;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(generateGameThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(generateGameThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.quiz = action.payload;
        })
        .addCase(generateGameThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(getNextQuestionThunk.pending, (state) => {
            state.questionStatus.isLoading = true;
        })
        .addCase(getNextQuestionThunk.fulfilled, (state, action) => {
            state.questionStatus.isLoading = false;
            state.activeQuestionData = action.payload;
        })
        .addCase(getNextQuestionThunk.rejected, (state, action) => {
            state.questionStatus.isLoading = false;
            state.questionStatus.error = action.payload;
        });
    
    }
})


export const quizActions = quizSlice.actions;
export const quizReducer = quizSlice.reducer;