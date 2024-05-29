import { instance } from "./http";
import { auth } from "./../firebase/firebase";

export const testApi = async () => {
  const user = await auth.currentUser;
  let token = "BEARER ";
  if (user) {
    const firebaseToken = user.getIdToken();
    token = token + firebaseToken;
  }
  return instance.get("/", {
    headers: {
      Authorization: token,
    },
  });
};
