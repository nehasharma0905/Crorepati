import {getInstance} from "./mainInstance";

export const testApi = async () => {
  const instance = await getInstance();
  return instance.get("/");
  // What is this instance ?
      // This instance is an axios instance with base url and headers set
      
  
      // This is when instance is not used
      // return axios.get("https://localhost:3000/", {
      //     headers: {
      //         'Authorization': 'Bearer ' + token ?? ''
      //     },
      //     data: {
      //         email, 
      //     }
      // });
      
      // This is when instance is used
      // const instance = await getInstance();
      // return instance.get("/"); // actual api call
};

