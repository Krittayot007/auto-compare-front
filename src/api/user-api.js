import axios from "./axios";

export const createOrDeleteWishList = (id) =>
  axios.post(`/user/wishlist/${id}`);

export const fetchWishList = (id) => axios.get(`/user/fetchWishlist/${id}`);

export const fetchWishListByProductId = (id) =>
  axios.get(`/user/checkWishlist/${id}`);
