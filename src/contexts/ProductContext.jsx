import { useEffect, useState } from "react";
import { createContext } from "react";
import { searchProduct } from "../api/public-api";

export const ProductContext = createContext();

export default function ProductContextProvider(props) {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const res = await searchProduct({
      search: "",
    });
    setProduct(res.data.result);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ fetchProduct, product }}>
      {props.children}
    </ProductContext.Provider>
  );
}
