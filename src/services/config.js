import axios from "axios";
import { getLocalStorage } from "../utils/util";
import { startLoading, stopLoading } from "../redux/slice/loadingSlice";
import { store } from "../redux/configStore";
export const http = axios.create({
  // Your axios configurations
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  headers: {
    tokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMCIsIkhldEhhblN0cmluZyI6IjAxLzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNTE0ODgwMDAwMCIsIm5iZiI6MTY5ODY4NTIwMCwiZXhwIjoxNzI1Mjk2NDAwfQ.CPY1b9IiMcklQZ9hjqIzrdiOlQ5YnV4VpzGu_yZr7G0",
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
