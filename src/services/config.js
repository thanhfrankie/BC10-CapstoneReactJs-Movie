import axios from "axios";
import { getLocalStorage } from "../utils/util";
import { startLoading, stopLoading } from "../redux/slice/loadingSlice";
import { store } from "../redux/configStore";
export const http = axios.create({
  // Your axios configurations
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  headers: {
    tokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMCIsIkhldEhhblN0cmluZyI6IjMwLzEwLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc2MTc1NzIwMDAwMCIsIm5iZiI6MTY5ODY4NTIwMCwiZXhwIjoxNzYxNzU3MjAwfQ.R238KQt9e-rThXuVLj1cb3kh1KFNdm3eTIiaP4z3IQQ",
    Authorization: `Bearer ${getLocalStorage("user")?.accessToken}`,
  },
  timeout: 300000,
});
// http.interceptors.request.use(
//   (config) => {
//     store.dispatch(startLoading());
//     return config;
//   },
//   (error) => {
//     store.dispatch(stopLoading());
//     return Promise.reject(error);
//   }
// );

// http.interceptors.response.use(
//   (response) => {
//     store.dispatch(stopLoading());
//     return response;
//   },
//   (error) => {
//     store.dispatch(stopLoading());
//     return Promise.reject(error);
//   }
// );
