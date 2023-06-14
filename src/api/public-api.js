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

export const getProductById = (id) => axios.get(`/product/fetch/${id}`);

export const editProduct = (id, value) =>
  axios.patch(`/admin/updateProduct/${id}`, value);

export const deleteFileProduct = (id) =>
  axios.delete(`/admin/deleteFile/${id}`);

export const deleteProduct = (id) => axios.delete(`/admin/delete/${id}`);
