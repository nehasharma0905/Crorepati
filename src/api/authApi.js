import { getInstance } from "./mainInstance";

// Sign Up
// For every Api it is recommended to have a separate endpoint/route

export const SignUp = async (userName) => {
  const instance = await getInstance();
  return instance.post("/user/sign-up", {
    name: userName,
  });
};

export const LoginUser = async () => {
  const instance = await getInstance();
  return instance.get("/user/login");
};
