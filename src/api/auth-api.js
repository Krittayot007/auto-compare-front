import axios from "./axios";

// const todoApi = axios.create({
//   baseURL: "http://localhost:8080",
// });

// const addToken = (token) => ({
//   // ท่านี้ return เป็น object
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

export const register = (input) => {
  return axios.post("/auth/register", input);
};

export const login = (input) => {
  return axios.post("/auth/login", input);
};

export const getMe = () => {
  return axios.get("/auth/me");
};
