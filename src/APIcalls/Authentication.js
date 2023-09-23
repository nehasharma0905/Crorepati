import baseURL from "../Data/BaseUrl.json";
import axios from "axios";

export const createUser = async (username, password) => {
  await axios
    .post(baseURL.url + "/auth/create", {
      username: username,
      password: password,
    })
    .then((response) => {
      console.log(response);
    });
};

export const loginUser = async (username, password) => {
  try {
    const data = await axios
    .post(baseURL.url + "/auth/login", {
      username: username,
      password: password,
    })
    return data;
  }
  catch (error) {
    console.log(error);
  }
  
};
