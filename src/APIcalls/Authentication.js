import baseURL from "../Data/BaseUrl.json";
import axios from "axios";

export const createUser = async (username, password) => {
  console.log(username, password);
  try {
    const {data} = await axios.post(baseURL.url + "/auth/create", {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const {data} = await axios.post(baseURL.url + "/auth/login", {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const lockAnswer = async (quizId, questionId, answerId, earnedScore) => {
  try {
    const data = await axios.post(baseURL.url + "/quiz/lockAnswer", {
      quizId: quizId,
      questionId: questionId,
      answerId: answerId,
      earnedScore: earnedScore,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const generateQuiz = async (username) => {
  try {
    const data = await axios.get(baseURL.url + "/quiz/getQuiz/" + username);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getQuestionByID = async (questionId) => {
  try {
    const data = await axios.get(baseURL.url + "/questions/" + questionId);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const useLifeLineAPI = async (quizId, questionId, lifeLineType) => {
  try {
    const data = await axios.post(baseURL.url + "/quiz/useLifeLine", {
      quizId: quizId,
      questionId: questionId,
      lifelineType: lifeLineType,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
