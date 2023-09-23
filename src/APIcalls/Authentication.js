import baseURL from "../Data/BaseUrl.json";
import axios from "axios";
export const createUser = (username, password) => {
  axios
    .post(baseURL.url + "/auth/create", {
      username: username,
      password: password,
    })
    .then((response) => {
      console.log(response);
    });
};

export const loginUser = (username, password) => {
  axios
    .post(baseURL.url + "/auth/login", {
      username: username,
      password: password,
    })
    .then((response) => {
      console.log(response);
    });
};
