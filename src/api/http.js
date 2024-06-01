import axios from 'axios';
import {auth} from './../firebase/firebase';

const environmentVariables = import.meta.env;

// export const instance = axios.create({
//   baseURL: environmentVariables.VITE_ENDPOINT, // VITE_ENDPOINT is an environment variable defined in .env file
//   headers: {
//     'X-Custom-Header': 'foobar',
//     'Authorization': 'Bearer ' + (async ()=>await auth.currentUser.getIdToken())() // This is how you can use firebase auth token in axios instance
//   }
// });


export const getInstance = async () => {
  const token = await auth.currentUser.getIdToken();
  return axios.create({
    baseURL: environmentVariables.VITE_ENDPOINT, // VITE_ENDPOINT is an environment variable defined in .env file
    headers: {
      'Authorization': 'BEARER ' + token ?? '' // This is how you can use firebase auth token in axios instance
    }
  });
}