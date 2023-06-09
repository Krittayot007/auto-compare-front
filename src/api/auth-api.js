import axios from "axios";

const todoApi = axios.create({
  baseURL: "http://localhost:8080",
});

const addToken = (token) => ({
  // ท่านี้ return เป็น object
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const register = (input) => {
  return todoApi.post("/auth/register", input);
};

export const login = (input) => {
  return todoApi.post("/auth/login", input);
};

export const getMe = (token) => {
  return todoApi.get("/auth/me", addToken(token));
};
