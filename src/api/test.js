import {getInstance} from "./http";

export const testApi = async () => {
  const instance = await getInstance();
  return instance.get("/");
};
