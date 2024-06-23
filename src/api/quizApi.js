import { getInstance } from "./mainInstance";

export const generateGame = async () => {
  const instance = await getInstance();
  return instance.get("/games/new");
};

export const getNextQuestion = async (gameId) => {
    const instance = await getInstance();
    return instance.get(`/games/next?gameId=${gameId}`);
    }