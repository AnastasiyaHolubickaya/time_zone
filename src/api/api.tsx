import axios from "axios";

export const instance =  axios.create({
    withCredentials: true,
    headers: {
       /* "api-key":"2a358658-5509-4853-b559-d1ee110511e4"*/
    },
    baseURL: "http://localhost:3000/"
});