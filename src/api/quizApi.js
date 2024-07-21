import { getInstance } from "./mainInstance";

export const generateGame = async () => {
  const instance = await getInstance();
  return instance.get("/games/new");
};

export const getNextQuestion = async (gameId) => {
  const instance = await getInstance();
  return instance.get(`/games/next?gameId=${gameId}`);
};

export const getCorrectAnswer = async (gameId, questionId, answerId) => {
  const instance = await getInstance();
  return instance.post(`/games/lock-answer`, {
    gameId: gameId,
    questionId: questionId,
    answerId: answerId,
  });
};

export const getLifeLineStatus = async (gameId, questionId, lifelineId) => {
  const instance = await getInstance();
  return instance.post(`/games/use-life-line`, {
    gameId: gameId,
    questionId: questionId,
    lifelineId: lifelineId,
  });
};

export const gameOverStatus = async (gameId, reason) => {
  const instance = await getInstance();
  return instance.post(`/games/game-over`, {
    gameId: gameId,
    reason: reason,
  });
};
