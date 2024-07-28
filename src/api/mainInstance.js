import axios from 'axios';
import {auth} from '../firebase/firebase';

const environmentVariables = import.meta.env;


// This is used to create new instance for axios with some default configurations
// Here we have attached Authorization header with token from firebase auth
// base url is taken from environment variables

export const getInstance = async () => {
  const token = await auth.currentUser.getIdToken();
  return axios.create({
    baseURL: environmentVariables.VITE_ENDPOINT, // VITE_ENDPOINT is an environment variable defined in .env file
    headers: {
      'Authorization': 'BEARER ' + token ?? '' // This is how you can use firebase auth token in axios instance
    }
  });
}