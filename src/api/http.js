import axios from "axios";
import { auth } from "./../firebase/firebase";

const environmentVariables = import.meta.env;

export const instance = axios.create({
  baseURL: environmentVariables.VITE_ENDPOINT, // VITE_ENDPOINT is an environment variable defined in .env file
});
