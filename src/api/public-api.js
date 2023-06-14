import axios from "./axios";

export const addProduct = (input) => {
  return axios.post("admin/addProduct", input);
};

export const uploadProduct = (id, files) => {
  console.log(id, files);
  return axios.post(`admin/addImage/${id}`, files, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const searchProduct = (input) => axios.post("/product/search", input);
