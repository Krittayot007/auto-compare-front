import { useEffect, useState } from "react";
import { createContext } from "react";
import { searchProduct } from "../api/public-api";
import { getProductById } from "../api/public-api";

export const ProductContext = createContext();

export default function ProductContextProvider(props) {
  const [product, setProduct] = useState([]);
  const [fetchProduct, setFetchProduct] = useState({});

  const getAllProduct = async () => {
    const res = await searchProduct({
      search: "",
    });
    setProduct(res.data.result);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const getProductByNumber = async (id) => {
    const res = await getProductById(id);
    setFetchProduct(res.data);
  };

  return (
    <ProductContext.Provider
      value={{
        getAllProduct,
        product,
        getProductByNumber,
        fetchProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
