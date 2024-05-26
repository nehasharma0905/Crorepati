import { instance } from "./http";


export const testApi = async () => {
    return instance.get('/');
}